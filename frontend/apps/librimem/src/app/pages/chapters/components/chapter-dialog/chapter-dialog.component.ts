import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Chapter } from '../../../../models/chapter.model';
import { IStore } from '../../../../state/store';
import { IChapter } from '@librimem/api-interfaces';
import { ADD_CHAPTER } from '../../../../state/chapter/chapter.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChapterAddedSnackBar } from './components/chapter-added-snackbar';

/**
 * Dialog to add chapter
 */
@Component({
  templateUrl: "./chapter-dialog.component.html",
  styleUrls: ['./chapter-dialog.component.scss'],
})
export class ChapterDialogComponent implements OnInit {

  chapter!: IChapter

  constructor(
    private dialogRef: MatDialogRef<ChapterDialogComponent>,
    private store: Store<IStore>,
    private _snackBar: MatSnackBar
  ) {


  }

  ngOnInit(): void {
    this.chapter = new Chapter() as unknown as IChapter
    this.chapter.status = "TO_READ"
  }

  addChapter() {
    this.store.dispatch(ADD_CHAPTER({ newChapter: this.chapter }))
  }

  showSnackBar() {
    this._snackBar.openFromComponent(ChapterAddedSnackBar, {
      duration: 2000
    })
  }

}
