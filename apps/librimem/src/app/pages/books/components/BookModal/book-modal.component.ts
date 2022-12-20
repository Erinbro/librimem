import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { Observable } from 'rxjs';
import { selectBookStateIsSelecting, selectBookStateSelection } from '../../../../state/book/book.selector';
import { IBook } from '@librimem/api-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UPDATE_BOOK } from '../../../../state/book/book.action';

@Component({
  selector: 'librimem-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
})
export class BookModalComponent implements OnInit {

  /**
   * The current book
   */
  selection$!: Observable<IBook>
  /**
   * The new book
   */
  updatedBook!: FormGroup;

  constructor(private store: Store<IStore>, private builder: FormBuilder, private dialogRef: MatDialogRef<BookModalComponent>) { }

  ngOnInit(): void {
    this.selection$ = this.store.select(selectBookStateSelection)
    this.selection$.subscribe((data) => {
      console.log(data)
      this.updatedBook = this.builder.group(data)
      this.updatedBook.valueChanges.subscribe((data) => {
        console.log("changes: ", data)
      })
    })
  }

  closeModal() {
    console.log(`close`);
    this.store.dispatch(UPDATE_BOOK({ updatedBook: this.updatedBook.value }))
  }



}
