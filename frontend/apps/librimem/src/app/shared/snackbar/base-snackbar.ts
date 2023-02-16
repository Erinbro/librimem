import { Component, Input, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  template: `
  <span matSnackBarLabel>
    {{content}}
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
export class BaseSnackBarComponent {
  snackBarRef = inject(MatSnackBarRef)
  @Input() content!: string
}
