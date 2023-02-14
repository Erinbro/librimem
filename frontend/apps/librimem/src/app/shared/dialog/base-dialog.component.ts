import { Component, ViewChild } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'librimem-base-dialog',
  template: `
  <mat-dialog-content></mat-dialog-content>

  `,
  styleUrls: ['./base-dialog.component.scss'],
  imports: [MatDialogModule],
  standalone: true
})
export abstract class BaseDialogComponent {
}
