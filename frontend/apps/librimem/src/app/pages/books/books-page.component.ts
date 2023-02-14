import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../state/store';
import { MatDialog } from '@angular/material/dialog';
import { BookModalComponent } from './components/BookModal/book-modal.component';

@Component({
  selector: 'librimem-books-page',
  template: `
  <div class="books-page">
    <div class="books-page__list">

    <div class="books-page__button">
      <librimem-add-button tooltip="Add Book"
      content="+" (click)="openModal()" />
    </div>
    <librimem-book-list></librimem-book-list>
    </div>
</div>
  `,
  styles: [`
    .books-page {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      .books-page__list {
      width: fit-content;
      height: 100%;
      display: grid;
      grid-template-rows: 3fr 7fr;
      grid-template-areas:
      "btn"
      "list";


      .books-page__button {
          grid-area: btn;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        librimem-books-list {
          grid-area: list;
          width: 100%;
          height: 100%;
        }

      }
    }

  `]
})
export class BooksPageComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openModal() {
    const dialogRef = this.dialog.open(BookModalComponent, { data: { isEditing: false, id: undefined } })
  }



}
