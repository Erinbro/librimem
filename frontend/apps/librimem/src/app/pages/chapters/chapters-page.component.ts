import { Component, OnInit } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ChapterDialogComponent } from './components/chapter-dialog/chapter-dialog.component';


/**
 * Page that shows the chapters of a book
 */
@Component({
  selector: 'librimem-chapters-page',
  template: `
  <div class="chapters-page">
  <div class="chapters-page__list">
    <div class="chapters-page__button">
      <librimem-add-button (click)="openDialog()"  />
    </div>
    <librimem-chapters-list></librimem-chapters-list>
  </div>
</div>
  `,
  styles: [`
  .chapters-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .chapters-page__list {
    width: fit-content;
    height: 100%;
    display: grid;
    grid-template-rows: 3fr 7fr;
    grid-template-areas:
      'btn'
      'list';

    .chapters-page__button {
      grid-area: btn;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    librimem-chapters-list {
      grid-area: list;
      width: 100%;
      height: 100%;
    }
  }
}

  `]
})
export class ChaptersPageComponent implements OnInit {




  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  /**
   * Opens dialog to add a chapter
   */
  openDialog() {
    this.dialog.open(ChapterDialogComponent, {})
  }
}
