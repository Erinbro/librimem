import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Chapter } from '../../../../models/chapter.model';
import { IStore } from '../../../../state/store';
import { IChapter } from '@librimem/api-interfaces';
import { ADD_CHAPTER } from '../../../../state/chapter/chapter.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChapterAddedSnackBar } from './components/chapter-added-snackbar';
import { selectSelectedBook } from '../../../../state/book/book.selector';
import { Subscription } from 'rxjs';

/**
 * Dialog to add chapter
 */
@Component({
  templateUrl: "./chapter-dialog.component.html",
  styleUrls: ['./chapter-dialog.component.scss'],
})
export class ChapterDialogComponent implements OnInit, OnDestroy {

  entityId!: number
  selectedBookSubscription!: Subscription
  chapter!: FormGroup


  constructor(
    private dialogRef: MatDialogRef<ChapterDialogComponent>,
    private store: Store<IStore>,
    private _snackBar: MatSnackBar,
    private builder: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.selectedBookSubscription = this.store.select(selectSelectedBook).subscribe((s) => {
      if (!s) return
      this.entityId = s.id
    })
    this.chapter = this.builder.group(new Chapter())
    this.chapter.patchValue({
      entityId: this.entityId
    })
  }

  ngOnDestroy(): void {
    this.selectedBookSubscription.unsubscribe()
  }

  indexMatchValidator(g: FormGroup) {
    ((g.get("index") as unknown as AbstractControl).value as unknown as string).length > 0 ? null : {
      'mismatch': true
    }
  }

  addChapter() {
    const newChapter = this.chapter.getRawValue()
    console.log(`newChapter: ${JSON.stringify(newChapter)}`);
    this.store.dispatch(ADD_CHAPTER({ newChapter }))
    this.showSnackBar()
  }

  showSnackBar() {
    this._snackBar.openFromComponent(ChapterAddedSnackBar, {
      duration: 2000
    })
  }

}
