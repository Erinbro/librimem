import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-favorite-button',
  template: `
  <div class="favorite-icon-button" (click)="clicked($event)">
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
  @Output() click = new EventEmitter()

  clicked(ev: MouseEvent) {
    ev.preventDefault()
    ev.stopPropagation()
    this.toggleSelected()
    this.click.emit("clicked")
  }


  toggleSelected() {
    console.log(`clicked`);

    this.selected = !this.selected
  }
}
