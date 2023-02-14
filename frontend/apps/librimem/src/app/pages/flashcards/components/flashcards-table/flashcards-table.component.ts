import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFlashcard } from '@librimem/api-interfaces';
import { selectFlashcardStateData } from '../../state/flashcard.selectors';
import { Subscription } from 'rxjs';
import { entitiesToArray } from '../../../../utils/entitiesToArray';
import { RouterService } from '../../../../services/router/router.service';
import { MatDialog } from '@angular/material/dialog';
import { FlashcardDialogComponent } from '../flashcard-dialog/flashcard-dialog.component';
import { SELECT_FLASHCARD, UPDATE_FLASHCARD } from '../../state/flashcard.actions';
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
   *
   * @param id
   */
  editFlashcard(id: number) {
    console.log(`selected: ${id}`);
    const selectedFlashcard = this.flashcards.find((x) => x.id == id)
    if (!selectedFlashcard) return

    this.store.dispatch(SELECT_FLASHCARD({ selectedFlashcard }))
    const dialogRef = this.dialog.open(FlashcardDialogComponent, {
      data: { editing: true, updatedFlashcard: undefined, selectedFlashcard }
    })

  }



}
