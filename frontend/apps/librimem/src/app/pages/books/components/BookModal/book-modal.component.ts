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
  bookReadableForm!: FormGroup;
  bookCover!: string
  /**
   * base64 encoded data of readable
   */
  bookData!: string;
  base64Epub!: string;
  chapters: undefined | { label: string; href: string }[]


  constructor(
    private dialogRef: MatDialogRef<BookModalComponent>,
    private store: Store<IStore>,
    private builder: FormBuilder,
    private openLibraryClient: OpenLibraryClient,
    private epubStorageService: EpubStorageService,
    private sanitization: DomSanitizer,
    private coverStorageService: CoverStorageService
  ) { }

  /** NOTE Since we use BookModalComponent both for editing and adding a book
  * we must ascertain whether we are editing or adding
  */
  ngOnInit(): void {
    this.book = this.builder.group(new Book());
    this.bookReadableForm = this.builder.group(new Readable())
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

  addBook() {
    const newBook = this.book.value as IBook

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // newBook.cover = this.bookCover
    newBook.data = this.bookData;

    this.store.dispatch(ADD_BOOK({ newBook }))
    // this.dialogRef.close();
  }

  addChapters(chapters: { label: string; href: string }[]) {
    console.log(`chapters: ${chapters}`);

    this.chapters = chapters;
    const newChapters = this.createChapters(chapters);

    this.store.dispatch(ADD_CHAPTERS({ newChapters }))
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
    const file = this.readableInput.nativeElement.files[0]

    const reader = new FileReader()
    reader.addEventListener("load", (event) => this.propagateBase64(event, this.addEpub.bind(this)))
    reader.readAsDataURL(file)
  }

  propagateBase64(ev: Event, addEpub: (readableData: string) => void) {
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
    this.bookData = formatedUrl

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
