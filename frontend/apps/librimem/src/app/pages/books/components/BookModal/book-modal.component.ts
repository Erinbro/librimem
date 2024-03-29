import { Component, Input, OnInit, Optional, ViewChild, inject, ElementRef, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { Observable, Subject, BehaviorSubject, share, shareReplay, from, of, Subscription } from 'rxjs';
import { selectBookStateIsSelecting, selectBookStateSelection, selectBookStateBookById, selectBookStateNewBook } from '../../../../state/book/book.selector';
import { IBook, ICover, IChapter } from '@librimem/api-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UPDATE_BOOK, ADD_BOOK } from '../../../../state/book/book.action';
import { Book } from '../../../../models/Book';
import { OpenLibraryClient } from '../../../../services/http/openlibrary.client';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { EpubStorageService } from '../../../../storage/features/epub.storage.service';
import { Readable } from '../../../../models/readable.model';
import { DomSanitizer } from "@angular/platform-browser"
import Epub from "epubjs"
import { CoverStorageService } from '../../../../storage/features/cover.storage.service';
import { Cover } from '../../../../models/cover.model';
import { ADD_CHAPTERS } from '../../../../state/chapter/chapter.actions';
import { Chapter } from '../../../../models/chapter.model';
import { ReadableClientService } from '../../../../services/http/readable.client.service';


/**
 * Extracted type of ISearchResults
 */
interface docsType {
  author_alternative_name?: string
  author_key: string[]
  author_name: string[] | string
  edition_key: string[]
  isbn: string[]
  language: string[]
  number_of_pages_median: number
  subject: string[]
  title: string
  cover?: string
}

@Component({
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
  providers: [EpubStorageService]
})
export class BookModalComponent implements OnInit, OnDestroy {

  @ViewChild("readableInput")
  readableInput!: ElementRef

  @ViewChild("cover")
  cover!: ElementRef

  searchTerm = ""
  searchResults$: Observable<docsType[]> = new Observable()

  /**
   * The book that we are currently adding
   */
  addingBook!: IBook
  addingBookSubscription!: Subscription

  /**
   * Decides if searching
   */
  loading = false

  /**
   * The new book
   */
  book!: FormGroup;
  /**
   * The base64 string of the image
   */
  bookCover!: string
  /**
   * base64 encoded data of readable
   */
  base64Epub!: string;
  chapters: undefined | { label: string; href: string }[]


  constructor(
    private dialogRef: MatDialogRef<BookModalComponent>,
    private store: Store<IStore>,
    private builder: FormBuilder,
    private openLibraryClient: OpenLibraryClient,
    private epubStorageService: EpubStorageService,
    private sanitization: DomSanitizer,
    private coverStorageService: CoverStorageService,
    private readableClientService: ReadableClientService
  ) { }

  /** NOTE Since we use BookModalComponent both for editing and adding a book
  * we must ascertain whether we are editing or adding
  */
  ngOnInit(): void {
    this.book = this.builder.group(new Book());
    this.addingBookSubscription = this.store.select(selectBookStateNewBook).subscribe((res) => {
      if (!res) return
      this.addingBook = res;
    })
  }

  ngOnDestroy(): void {
    // this.addCover()
    this.addingBookSubscription.unsubscribe();
  }

  searchBook() {
    this.loading = true
    this.searchResults$ = this.openLibraryClient.searchBooksByTitle(this.searchTerm)
    this.loading = false;
  }

  async addBook() {
    const newBook = this.book.value as IBook
    // newBook.cover = this.bookCover

    this.store.dispatch(ADD_BOOK({ newBook }))
    await this.addBookReadable()
    this.dialogRef.close();
  }

  addChapters(chapters: { label: string; href: string }[]) {
    console.log(`chapters: ${chapters}`);

    this.chapters = chapters
    const newChapters = this.createChapters(chapters);

    this.store.dispatch(ADD_CHAPTERS({ newChapters }))
  }

  /**
   * Adds the readable to the backend
   */
  async addBookReadable() {
    // WAITING FOR BOOK SERVICE RESPONSE TO RESOLVE
    let retries2 = 3
    while (!this.addingBook) {
      retries2--
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
    // END

    const newReadable = new Readable();
    newReadable.cover = this.bookCover;
    newReadable.title = (this.book.getRawValue() as IBook).title

    // NOTE The backend generates the id of the book
    newReadable.entityId = this.addingBook.id;
    newReadable.type = "EPUB"
    newReadable.data = this.base64Epub
    this.readableClientService.addReadable(newReadable).subscribe((res) => {
      console.log(`Response from readable service: ${JSON.stringify(res.readable)}`);
      console.log(`result from readable service: ${res}`);
    })
  }

  private createChapters(chaptersData: { label: string, href: string }[]): IChapter[] {
    const chapters: IChapter[] = []
    chaptersData.forEach((x) => {
      const newChapter = new Chapter()
      newChapter.title = x.label;
    })
    return chapters;
  }



  loadFile(ev: Event) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const file = this.readableInput.nativeElement.files[0] as File

    // (this.readableInput.nativeElement as HTMLElement).click()

    if (file.size) {
      console.log(`size: ${file.size}`);
    }

    const reader = new FileReader()
    reader.addEventListener("load", (event) => this.propagateBase64(event, this.addEpub.bind(this)))
    reader.readAsDataURL(file)
  }

  private propagateBase64(ev: Event, addEpub: (readableData: string) => void) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const formatedUrl = ev.target.result.replace('data:application/epub+zip;base64,', '')
    this.base64Epub = formatedUrl
    addEpub(formatedUrl)
  }

  addEpub(readableData: string) {
    this.getCover(readableData)
    this.epubStorageService.addEpub({ title: "", epub: readableData })
  }

  /**
   * Gets the cover of the readable
   * @param readableData
   */
  getCover(readableData: string) {
    const epub = Epub({ encoding: "base64" })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const formatedUrl = readableData.replace('data:application/epub+zip;base64,', '');

    // ANCHOR Get chapters
    epub.loaded.navigation.then((toc) => {
      console.log(`chapters: ${JSON.stringify(toc)}`);
      this.addChapters(toc.toc)

    })


    epub.open(formatedUrl)
    epub.ready.then(() => {
      epub.coverUrl().then((url) => {
        if (!url) return;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.bookCover = this.sanitization.bypassSecurityTrustUrl(url)
        console.log(`cover: ${this.bookCover}`);

      })
    })
  }

  /**
   * Executes right before the modal closes.
   * We need the id of the book
   *
   */
  addCover() {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    ctx?.drawImage(this.cover.nativeElement, 100, 200)

    console.log(`addingBook: ${this.addingBook}`);

    const newCover = new Cover()
    newCover.data = canvas.toDataURL()
    newCover.readableId = this.addingBook.id;
    newCover.readableType = "BOOK"
    this.coverStorageService.addCover(newCover as ICover)
    console.log(`cover data: ${canvas.toDataURL()}`);

    this.bookCover = canvas.toDataURL();
  }
}
