import { selectFlashcardStateData } from './../../../../state/flashcard/flashcard.selectors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFlashcard } from '@librimem/api-interfaces';
import { Subscription } from 'rxjs';
import { entitiesToArray } from '../../../../utils/entitiesToArray';
import { RouterService } from '../../../../services/router/router.service';
import { MatDialog } from '@angular/material/dialog';
import { FlashcardDialogComponent } from '../flashcard-dialog/flashcard-dialog.component';
import { SELECT_FLASHCARD, UPDATE_FLASHCARD } from '../../../../state/flashcard/flashcard.actions';
import { IStore } from '../../../../state/store';

@Component({
  selector: 'librimem-flashcards-table',
  templateUrl: './flashcards-table.component.html',
  styleUrls: ['./flashcards-table.component.scss'],
})
export class FlashcardsTableComponent implements OnInit, OnDestroy {

  flashcards!: IFlashcard[]
  flashcardsSubscription!: Subscription
  displayedColumns: string[] = ["question", "answer"]


  constructor(private store: Store<IStore>, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.flashcardsSubscription = this.store.select(selectFlashcardStateData).subscribe((flashcards) => {
      this.flashcards = entitiesToArray(flashcards)
      console.log(`Flashcards: ${JSON.stringify(this.flashcards)}`);

    })
  }

  ngOnDestroy(): void {
    this.flashcardsSubscription.unsubscribe()
  }

  /**
   * Opens dialog to edit flashcard
   * @param id
   */
  editFlashcard(id: number) {
    const selectedFlashcard = this.flashcards.find((x) => x.id == id)
    if (!selectedFlashcard) return

    this.store.dispatch(SELECT_FLASHCARD({ selectedFlashcard }))
    this.dialog.open(FlashcardDialogComponent, {
      data: { editing: true, updatedFlashcard: undefined, selectedFlashcard },
      width: "100%",
      maxWidth: "768px",
      height: "100%",
      maxHeight: "768px",
    })
  }

  /**
   * Opens dialog to add flashcard
   */
  addFlashcard() {
    this.dialog.open(FlashcardDialogComponent, {
      data: { editing: false },
      width: "100%",
      maxWidth: "768px",
      height: "100%",
      maxHeight: "768px",
    })
  }







}
