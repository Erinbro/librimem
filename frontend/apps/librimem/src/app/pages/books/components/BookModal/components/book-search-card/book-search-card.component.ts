import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../../../state/store';
import { Book } from '../../../../../../models/Book';
import { ADD_BOOK } from '../../../../../../state/book/book.action';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddedBookSnackBarComponent } from '../added-book-snackbar';

@Component({
  selector: 'librimem-book-search-card',
  template: `
    <div class="librimem-book-search-card mat-elevation-z4" (click)="addBook()">
      <div class="book-search-card__cover">
        <img [src]="book.cover" class="book-search-card__cover__img" />
      </div>
      <div class="book-search-card__title">
        <p>{{book.title}}</p>
      </div>
      <div class="book-search-card__author-name">
        <p>{{book.author_name}}</p>
      </div>


    </div>

  `,
  styles: [`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .librimem-book-search-card {
    width: fit-content;
    max-width: 80%;
    margin-bottom: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      background-color: rgb(210, 210, 210);
    }
    .book-search-card__cover{
      padding: 1rem;
      .librimem-book-search__cover__img{
        max-width: 50vw;
        max-height: 20vh;
        width: auto;
        height: auto;

      }
    }
    .book-search-card__title {
      display: flex;
      max-width: 80vw;
      p {
        font-size: 24px;
        font-weight: bolder;
      }

    }
    .book-search-card__author-name {
      p {
        font-size: 16px;
      }

    }

  }

  `],
})
export class BookSearchCardComponent implements OnInit {
  @Input() book!: {
    author_name: string[] | string;
    title: string;
    cover?: string;
  }

  constructor(private store: Store<IStore>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.book.author_name = this.book.author_name[0]
  }

  /**
   * Add book
   */
  addBook() {
    const newBook = new Book()
    newBook.title = this.book.title
    newBook.author_name = this.book.author_name as string
    this.store.dispatch(ADD_BOOK({ newBook }))
    this.showSnackBar()
  }
  showSnackBar() {
    this._snackBar.openFromComponent(AddedBookSnackBarComponent, {
      duration: 2000
    })
  }
}
