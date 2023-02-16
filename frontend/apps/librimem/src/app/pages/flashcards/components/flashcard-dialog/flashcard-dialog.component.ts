import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFlashcard } from '@librimem/api-interfaces';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Flashcard } from '../../../../models';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { UPDATE_FLASHCARD, ADD_FLASHCARD } from '../../../../state/flashcard/flashcard.actions';

@Component({
  selector: 'librimem-flashcard-dialog',
  templateUrl: './flashcard-dialog.component.html',
  styleUrls: ['./flashcard-dialog.component.scss'],
})
export class FlashcardDialogComponent implements OnDestroy {

  flashcardFormGroup!: FormGroup
  isEditing = false
  question = "";
  answer = "";

  constructor(
    public dialogRef: MatDialogRef<FlashcardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { editing: boolean, selectedFlashcard: IFlashcard | undefined, updatedFlashcard: IFlashcard }
    , private store: Store<IStore>) {

    if (data.editing && data.selectedFlashcard) {
      this.isEditing = true
      this.flashcardFormGroup = new FormBuilder().group(data.selectedFlashcard)

      // Set the current question and answer
      this.question = data.selectedFlashcard.question
      if (!data.selectedFlashcard.answer) return
      this.answer = data.selectedFlashcard.answer
    }
    else {
      this.flashcardFormGroup = new FormBuilder().group(new Flashcard())
    }

    this.data.updatedFlashcard = this.flashcardFormGroup.getRawValue() as unknown as IFlashcard
  }


  updateFlashcard() {
    const flashcardCopy = this.flashcardFormGroup.getRawValue() as IFlashcard
    this.store.dispatch(UPDATE_FLASHCARD({ updatedFlashcard: flashcardCopy }))
  }

  addFlashcard() {
    const flashcardCopy = this.flashcardFormGroup.getRawValue() as IFlashcard
    this.store.dispatch(ADD_FLASHCARD({ newFlashcard: flashcardCopy }))
  }

  /**
   * Cloes Dialog
   */
  close() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.isEditing) {
      this.updateFlashcard()
    }
    else {
      this.addFlashcard()
    }
  }
}
