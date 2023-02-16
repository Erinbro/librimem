import { Component, Input, OnInit, Optional, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { Observable, Subject, BehaviorSubject, share, shareReplay, from, of } from 'rxjs';
import { selectBookStateIsSelecting, selectBookStateSelection, selectBookStateBookById } from '../../../../state/book/book.selector';
import { IBook } from '@librimem/api-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UPDATE_BOOK, ADD_BOOK } from '../../../../state/book/book.action';
import { Book } from '../../../../models/Book';
import { OpenLibraryClient } from '../../../../services/http/openlibrary.client';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { AddedBookSnackBarComponent } from './components/added-book-snackbar';



/**
 * Extracted type of ISearchResults
 */
interface docsType {
  author_alternative_name?: string
  author_key: string[]
  author_name: string[] | string
  edition_key: string[]
  isbn: string[]
  language: string[]
  number_of_pages_median: number
  subject: string[]
  title: string
  cover?: string
}

@Component({
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
})
export class BookModalComponent implements OnInit {

  searchTerm = ""
  searchResults$!: Observable<docsType[]>
  /**
   * The book that was selected from the search
   */
  bookSelection?: IBook

  /**
   * Decides if searching
   */
  loading = false

  /**
   * The new book
   */
  book!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<BookModalComponent>,
    private store: Store<IStore>,
    private builder: FormBuilder,
    private openLibraryClient: OpenLibraryClient,
    private _snackBar: MatSnackBar
  ) { }

  /** NOTE Since we use BookModalComponent both for editing and adding a book
  * we must ascertain whether we are editing or adding
  */
  ngOnInit(): void {
    this.book = this.builder.group(new Book());
  }

  searchBook() {
    this.loading = true
    this.searchResults$ = this.openLibraryClient.searchBooksByTitle(this.searchTerm)
    this.loading = false;
  }

  addBook() {
    this.store.dispatch(ADD_BOOK({ newBook: this.book.value }))
    this.dialogRef.close();
    this.showSnackBar()
  }

  showSnackBar() {
    this._snackBar.openFromComponent(AddedBookSnackBarComponent, {
      duration: 2000
    })
  }

}
