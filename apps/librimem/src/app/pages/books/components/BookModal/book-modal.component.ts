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
    // Get the selected book from the store
    this.selection$ = this.store.select(selectBookStateSelection)

    // We have a subscriber
    this.selection$.subscribe((data) => {
      console.log(data)
      this.updatedBook = this.builder.group(data)
      // Another subscriber
      this.updatedBook.valueChanges.subscribe((data: IBook) => {
        // NOTE update the selection after each change
        this.store.dispatch(UPDATE_BOOK({ updatedBook: data }))
      })
    })
  }

}
