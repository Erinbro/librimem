import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from 'apps/librimem/src/app/state/store';
import { Subscription } from 'rxjs';
import ePub, { Book, Rendition } from "epubjs"
import { selectReadableStateReadable } from '../../../../state/readable/readable.selector';
import { IReadable } from '@librimem/api-interfaces';

@Component({
  selector: 'librimem-reader-container',
  templateUrl: './reader-container.component.html',
  styleUrls: ['./reader-container.component.scss'],
})
export class ReaderContainerComponent implements OnInit, OnDestroy {

  @ViewChild("prev")
  prev!: ElementRef

  @ViewChild("next")
  next!: ElementRef

  title!: string;
  /**
   * base64 string of the readable
   */
  readable!: IReadable;
  readableSubscription!: Subscription
  rendition!: Rendition
  epubBook!: Book



  constructor(private store: Store<IStore>) {

  }

  ngOnInit(): void {
    this.readableSubscription = this.store.select(selectReadableStateReadable).subscribe((res) => {
      console.log(`reader data: ${res}`);

      if (!res) return

      this.readable = res
      this.renderBook()
    })
  }

  renderBook() {
    const book = ePub({ encoding: "base64" })
    this.epubBook = book

    book.open(this.readable.data)

    const rendition = book.renderTo(document.querySelector("#readable") as Element, { width: "100%", height: 300, flow: "scrolled-doc" })
    this.rendition = rendition;

    book.loaded.navigation.then((toc) => {
      console.log(`toc: ${JSON.stringify(toc)}`);

    })

    const displayed = rendition.display()
  }


  ngOnDestroy() {
    this.readableSubscription.unsubscribe();
  }

  triggerPrev(ev: Event) {
    ev.preventDefault()
    ev.stopPropagation()
    this.rendition.prev()
  }

  triggerNext(ev: Event) {
    ev.preventDefault()
    ev.stopPropagation()
    this.rendition.next()
  }

}
