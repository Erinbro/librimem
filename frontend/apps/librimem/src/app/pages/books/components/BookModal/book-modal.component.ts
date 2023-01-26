import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { Observable, Subject, BehaviorSubject, share, shareReplay, from, of } from 'rxjs';
import { selectBookStateIsSelecting, selectBookStateSelection, selectBookStateBookById } from '../../../../state/book/book.selector';
import { IBook } from '@librimem/api-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UPDATE_BOOK, ADD_BOOK } from '../../../../state/book/book.action';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog"
import { BookPersistence } from '../../../../services/storage/book.storage';
import { Book } from '../../../../models/Book';

@Component({
  selector: 'librimem-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
})
export class BookModalComponent implements OnInit {

  /**
   * The current book
   */
  selection$!: Observable<IBook | undefined>

  /**
   * The new book
   */
  book!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { isEditing: boolean, id: number }, private store: Store<IStore>, private builder: FormBuilder, private dialogRef: MatDialogRef<BookModalComponent>, private bookPersistence: BookPersistence) { }

  /** NOTE Since we use BookModalComponent both for editing and adding a book
  * we must ascertain whether we are editing or adding
  */
  ngOnInit(): void {

    this.selection$ = (this.store.select(selectBookStateBookById(this.data.id)) as Observable<IBook>).pipe(share())


    // If we are adding a new book
    if (!this.data.isEditing) {
      console.log(`We are adding`)
      this.book = this.builder.group(new Book());
    }

    // If we are editing a book
    else {
      console.log(`We are editing, id: ${this.data.id}`)

      this.selection$.subscribe((selectedBook) => {
        if (!selectedBook) return;
        console.log(`Here the selection: ${selectedBook}`)
        // We cast to 'IBook' because we know that it will be 'IBook'
        this.book = this.builder.group(selectedBook as IBook)

        // If the user is editing the book we want to change the state
        this.book.valueChanges.subscribe((updatedBook) => {
          console.log("updated: ", updatedBook)
          this.store.dispatch(UPDATE_BOOK(updatedBook))
        })

      })
    }
  }

  updateBook() {
    console.log(`Update book: ${this.book.getRawValue()}`)

    // this.store.dispatch(UPDATE_BOOK(this.book))

  }

  async addBook() {
    console.log(`Adding book`)
    this.store.dispatch(ADD_BOOK({ newBook: this.book.value }))

    // await this.bookPersistence.addBook(this.book.value)
    this.dialogRef.close(this.data);
  }

}
