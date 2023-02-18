import { Component, NgZone, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Quill from "quill"
import { ReaderClient } from '../../services/http/reader.client';
import ePub from "epubjs"
import { BookStorageApi } from '../../storage/features/book.storage';

@Component({
  selector: 'librimem-reader-page',
  templateUrl: './reader-page.component.html',
  styleUrls: ['./reader-page.component.scss'],
})
export class ReaderPageComponent implements OnInit, AfterViewInit {

  @ViewChild("input")
  input!: ElementRef

  content = '';
  file: any
  constructor(private readerClient: ReaderClient,
    // private bookStorageApi: BookStorageApi
  ) {
  }

  ngAfterViewInit(): void {
    // console.log(`input: ${JSON.stringify(this.input.nativeElement)}`);

    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    // (this.input.nativeElement as HTMLInputElement).onchange((ev) => {
    //   const file = ev.target.files[0]
    //   const fileReader = new FileReader()
    //   fileReader.onload = this.loadFile
    //   fileReader.readAsArrayBuffer(file)
    // })

  }

  ngOnInit(): void {

  }

  loadFile(e: Event) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const bookData = e.target.result
    console.log(`bookData: ${JSON.stringify(bookData)}`);

    console.log(`event: ${JSON.stringify(e)}`);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(`event: ${JSON.stringify(`value: ${e.target.value}`)}`);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.file = e.target.value
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(`event: ${JSON.stringify(`file : ${this.file}`)}`);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(`event: ${JSON.stringify(`file 2: ${JSON.stringify(e.target.files)}`)}`);


    // const book = ePub()
    // book.open("https://www.gutenberg.org/ebooks/19337.epub.noimages")
    // const rendition = book.renderTo("area", { width: 500, height: 500 })
    // const displayed = rendition.display()


    console.log(`file url: ${this.file}`);

  }



}

// document.getElementById(‘bookChooser’).addEventListener(‘change’, function (e) {
//   var firstFile = e.target.files[0];
//   if (window.FileReader) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       book = ePub({ bookPath: e.target.result });

