import { IChapter } from '@librimem/api-interfaces';
import { IStore } from './../../../../state/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectChapterStateData, selectChapterById } from '../../../../state/chapter/chapter.selectors';
import { entitiesToArray } from '../../../../utils/entitiesToArray';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UPDATE_CHAPTER } from '../../../../state/chapter/chapter.actions';
import { ChapterService } from '../../../../services/common/chapter.service';
import { ChapterDenominatorService } from '../../../../shared/chapter-denominator/chapter-denominator.service';

interface IChaptersWithParent {
  parent: IChapter;
  children: IChapter[];
}

/**
 * List of chapters with drag and drop functionality.
 */
@Component({
  selector: 'librimem-chapters-list',
  template: `
  <div class="chapters-list">
  <div class="list__chapter" *ngFor="let sortedChapter of sortedChapters">
    <librimem-chapter-card
      [chapter]="currentChapter"
      *ngFor="let currentChapter of sortedChapter"
    >
    </librimem-chapter-card>
  </div>
</div>

  `,
  styles: [`
  .chapters-list {
  width: 100%;
  height: 100%;
  user-select: none;
  padding: 1rem;

  .list__chapter {
    width: 100%;
    max-width: 768px;
    .chapters__seperation:not(:last-child) {
      width: 100%;
      height: 1rem;
      background-color: black;
    }
  }
}
  `]
})
export class ChaptersListComponent implements OnInit {
  //   /**
  //  * Chapters that must be read
  //  */
  //   toRead: IChapter[] = []

  //   /**
  //    * Chapters that are being read
  //    */
  //   reading: IChapter[] = []

  //   /**
  //    * Chapters that have been read
  //    */
  //   read: IChapter[] = []
  sortedChapters: IChapter[][] = []
  colors: string[] = ["red", "blue", "green", "yellow"]


  constructor(private store: Store<IStore>, private chapterDenominatorService: ChapterDenominatorService) {
  }

  ngOnInit(): void {
    this.store.select(selectChapterStateData).subscribe({
      next: (chapters) => {
        const chaptersArray = entitiesToArray(chapters)
        const indexedChapters = this.chapterDenominatorService
          .getSortedChapterIndexes(chaptersArray)

        console.log(`[ChaptersListComponent.ngOnInit()] indexedChapters: ${JSON.stringify(indexedChapters)}`);

        this.sortedChapters = this.getSortedChapters(indexedChapters, chaptersArray)
        // this.distributeByStatus(entitiesToArray(chapters), indexedChapters)
      }
    })

  }

  /**
   * Sorts the chapters by index
   * @param indexes
   * @param chapters
   * @returns
   */
  getSortedChapters(indexes: number[][][], chapters: IChapter[]): IChapter[][] {
    const currentSortedChapters: IChapter[][] = []
    indexes.forEach((group) => {
      const currentSortedChapterGroup: IChapter[] = []
      group.forEach((chapter) => {
        const currentChapter = chapters.find((ch) => ch.index === chapter.join("."))
        if (currentChapter) {
          currentSortedChapterGroup.push(currentChapter)
        }
      })
      currentSortedChapters.push(currentSortedChapterGroup)
    })

    return currentSortedChapters
  }


  /**
   * Distributes the chapters to the their list.
   * The list is either toRead, reading or read
   */
  distributeByStatus(chapters: IChapter[], indexes: number[][]) {
    const sortedChapters: IChapter[] = new Array(chapters.length)

    chapters.forEach((ch, i) => {
      sortedChapters[i] = ch;
    })


    // sortedChapters.forEach((ch, i) => {
    //   switch (ch.status) {
    //     case "TO_READ":
    //       this.toRead.push(ch)
    //       break;
    //     case "READING":
    //       this.reading.push(ch)
    //       break;
    //     case "READ":
    //       this.read.push(ch)
    //       break;
    //   }
    // })
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
