import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  template: `
  <span matSnackBarLabel>
    Added Flashcard
  </span>
  <span matSnackBarActions>
    <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">
      Dismiss
    </button>
  </span>
  `,
  styles: [`
  `]
})
export class FlashcardAddedSnackBar {
  snackBarRef = inject(MatSnackBarRef)

}
