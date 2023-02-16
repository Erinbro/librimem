import { Component, inject } from "@angular/core";
import { MatSnackBarRef } from "@angular/material/snack-bar";

@Component({
  template: `
  <span matSnackBarLabel>
    Added Book
  </span>
  <span matSnackBarActions>
    <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">Dismiss</button>
  </span>
  `,
  styles: [`
  :host {
    display: flex;
    justify-content: space-between;
  }
  `]
})
export class AddedBookSnackBarComponent {
  snackBarRef = inject(MatSnackBarRef)
}
