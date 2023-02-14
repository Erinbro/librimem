import { Component, Input } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-favorite-button',
  template: `
  <div class="favorite-icon-button" (click)="toggleSelected()">
    <librimem-primary-button *ngIf="selected">
      <mat-icon>
        favorite
      </mat-icon>
    </librimem-primary-button>
    <librimem-primary-button *ngIf="!selected">
      <mat-icon>
        favorite__border
      </mat-icon>
    </librimem-primary-button>
  </div>
  `,
  styles: [``]
})
export class FavoriteButtonComponent {
  selected = false


  toggleSelected() {
    this.selected = !this.selected
  }
}
