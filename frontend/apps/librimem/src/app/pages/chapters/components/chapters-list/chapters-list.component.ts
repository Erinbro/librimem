import { IChapter } from '@librimem/api-interfaces';
import { IStore } from './../../../../state/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectChapterStateData, selectChapterById } from '../../../../state/chapter/chapter.selectors';
import { entitiesToArray } from '../../../../utils/entitiesToArray';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UPDATE_CHAPTER } from '../../../../state/chapter/chapter.actions';

/**
 * List of chapters with drag and drop functionality.
 */
@Component({
  selector: 'librimem-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.scss'],
})
export class ChaptersListComponent implements OnInit {
  /**
 * Chapters that must be read
 */
  toRead: IChapter[] = []

  /**
   * Chapters that are being read
   */
  reading: IChapter[] = []

  /**
   * Chapters that have been read
   */
  read: IChapter[] = []

  constructor(private store: Store<IStore>) {
  }

  ngOnInit(): void {
    this.store.select(selectChapterStateData).subscribe({
      next: (chapters) => {
        this.distributeByStatus(entitiesToArray(chapters))
      }
    })

  }

  /**
   * Distributes the chapters to the their list.
   * The list is either toRead, reading or read
   */
  distributeByStatus(chapters: IChapter[]) {
    chapters.forEach((ch, i) => {
      switch (ch.status) {
        case "TO_READ":
          this.toRead.push(ch)
          break;
        case "READING":
          this.reading.push(ch)
          break;
        case "READ":
          this.read.push(ch)
          break;
      }
    })
  }

  dropedItem(ev: CdkDragDrop<IChapter[], any, any>) {

    if (ev.previousContainer === ev.container) {
      moveItemInArray(ev.container.data, ev.previousIndex, ev.currentIndex)

    } else {
      transferArrayItem(
        ev.previousContainer.data,
        ev.container.data,
        ev.previousIndex,
        ev.currentIndex
      )

      const chapterId = parseInt(ev.item.element.nativeElement.id, 10)
      const containerName = ev.container.element.nativeElement['id']
      this.store.select(selectChapterById(chapterId)).subscribe((updatedChapter) => {
        const updatedChapterCopy = { ...updatedChapter }
        updatedChapterCopy.status = containerName
        this.store.dispatch(UPDATE_CHAPTER({ updatedChapter: updatedChapterCopy }))
      })

    }
  }
}
