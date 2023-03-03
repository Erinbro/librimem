import { Component, NgZone, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Quill from "quill"
import { ReaderClientService } from '../../services/http/reader.client.service';
import ePub from "epubjs"
import { BookStorageApi } from '../../storage/features/book.storage';
import { ReaderPageEpubService } from './services/reader-page-epub.service';
import { ChapterStorageApi } from '../../storage/features/chapter.storage';
import { EpubStorageService } from '../../storage/features/epub.storage.service';

@Component({
  selector: 'librimem-reader-page',
  templateUrl: './reader-page.component.html',
  styleUrls: ['./reader-page.component.scss'],
  providers: [ReaderPageEpubService]
})
export class ReaderPageComponent implements OnInit, AfterViewInit {

  @ViewChild("input")
  input!: ElementRef

  @ViewChild("area")
  area!: ElementRef

  /**
   * Either PDF or EPUB
   */
  isReadingPdf = false

  bookStorageApi!: BookStorageApi
  epubStorageService!: EpubStorageService

  content = '';
  file: any

  constructor(private readerClientService: ReaderClientService,
  ) {
    this.bookStorageApi = new BookStorageApi(new ChapterStorageApi())
    this.epubStorageService = new EpubStorageService()
  }

  ngAfterViewInit(): void {
    return;
  }

  ngOnInit(): void {
    return;
  }

  loadFile(e: Event) {
    const file = this.input.nativeElement.files[0]

    const reader = new FileReader()
    reader.addEventListener('load', (ev) => this.openEpub(ev, this.addEpub.bind(this)))
    reader.readAsDataURL(file)
  }



  openEpub(ev: Event, addEpub: (epubBase64: string, title: string) => void) {
    const book = ePub({ encoding: "base64" })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const formatedUrl = ev.target.result.replace('data:application/epub+zip;base64,', '');



    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    addEpub(formatedUrl, "")
    // this.bookStorageApi.addEpub({ title: this.getFormatedTitle(e.target.value), epub: formatedUrl })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    book.open(formatedUrl)
    // book.openEpub()
    const rendition = book.renderTo(document.querySelector("#area") as Element, { width: "100%", height: "100%" })
    const displayed = rendition.display()



  }

  /**
   * Gets the formatted title
   * @param unformattedTitle
   */
  getFormatedTitle(unformattedTitle: string) {
    return unformattedTitle.slice("C:\\fakepath\\".length - 1)
  }

  private addEpub(epubBase64: string, title: string) {
    this.epubStorageService.addEpub({ epub: epubBase64, title })
  }

}



