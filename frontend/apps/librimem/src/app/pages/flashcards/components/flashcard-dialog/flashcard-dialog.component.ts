import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFlashcard } from '@librimem/api-interfaces';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Flashcard } from '../../../../models';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { UPDATE_FLASHCARD, ADD_FLASHCARD } from '../../state/flashcard.actions';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'librimem-flashcard-dialog',
  templateUrl: './flashcard-dialog.component.html',
  styleUrls: ['./flashcard-dialog.component.scss'],
})
export class FlashcardDialogComponent {

  flashcardFormGroup!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<FlashcardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { editing: boolean, selectedFlashcard: IFlashcard | undefined, updatedFlashcard: IFlashcard }
    , private store: Store<IStore>) {

    if (data.editing && data.selectedFlashcard) {
      this.flashcardFormGroup = new FormBuilder().group(data.selectedFlashcard)
    }
    else {
      this.flashcardFormGroup = new FormBuilder().group(new Flashcard())
    }

    this.data.updatedFlashcard = this.flashcardFormGroup.getRawValue() as unknown as IFlashcard
  }

  updateForm(e: EditorChangeContent | EditorChangeSelection) {

    console.log(`c: ${e.editor.getContents()}`);


  }

  updateFlashcard() {
    this.store.dispatch(UPDATE_FLASHCARD({ updatedFlashcard: this.flashcardFormGroup.getRawValue() }))
  }

  addFlashcard() {
    this.store.dispatch(ADD_FLASHCARD({ newFlashcard: this.flashcardFormGroup.getRawValue() }))
  }

  /**
   * Cloes Dialog
   */
  close() {
    this.dialogRef.close();
  }
}
