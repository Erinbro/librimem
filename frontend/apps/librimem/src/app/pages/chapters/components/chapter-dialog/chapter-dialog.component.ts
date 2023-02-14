import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Chapter } from '../../../../models/chapter.model';
import { IStore } from '../../../../state/store';

/**
 * Dialog to add chapter
 */
@Component({
  template: `
  <mat-dialog-content class="chapter-modal">
    <h3>Add a Chapter</h3>
    <form [formGroup]="chapter">
      <mat-form-field matTooltip="The title of the chapter">
        <mat-label>Title</mat-label>
        <input formControlName="title" matInput />
      </mat-form-field>

    </form>


  </mat-dialog-content>
  `,
  styleUrls: ['./chapter-dialog.component.scss'],
})
export class ChapterDialogComponent implements OnInit {

  chapter!: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ChapterDialogComponent>,
    private store: Store<IStore>,
    private builder: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.chapter = this.builder.group(new Chapter())
  }

}
