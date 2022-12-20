import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { Observable } from 'rxjs';
import { selectBookStateIsSelecting, selectBookStateSelection } from '../../../../state/book/book.selector';
import { IBook } from '@librimem/api-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'librimem-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
})
export class BookModalComponent implements OnInit {

  isSelecting$!: Observable<boolean>
  /**
   * The current book
   */
  selection$!: Observable<IBook>
  /**
   * The new book
   */
  updatedBook!: FormGroup;

  constructor(private dialog: MatDialog, private store: Store<IStore>, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.isSelecting$ = this.store.select(selectBookStateIsSelecting)
    this.isSelecting$.subscribe((data) => {
      if (data) {
        this.dialog.open(BookModalComponent)
      }
    })
    this.selection$ = this.store.select(selectBookStateSelection)
    this.selection$.subscribe((data) => {
      console.log(data)
    })
    // this.updatedBook = this.builder.group(
  }
}
