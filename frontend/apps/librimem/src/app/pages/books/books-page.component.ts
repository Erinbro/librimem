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
      <librimem-add-button
      content="+" (click)="openModal()" />
    </div>
    <librimem-book-list></librimem-book-list>
    </div>
</div>
  `,
  styleUrls: ["./books-page.component.scss"]
})
export class BooksPageComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    return;
  }

  openModal() {
    const dialogRef = this.dialog.open(BookModalComponent, {
      width: "100%",
      maxWidth: "80vw",
      height: "100%",
      maxHeight: "80vh"
    })
  }



}
