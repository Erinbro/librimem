import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { OPEN_BOOK_MODAL, UPDATE_BOOK } from '../../../../state/book/book.action';
import { IStore } from '../../../../state/store';
import { MatDialog } from '@angular/material/dialog';
import { selectBookStateIsSelecting } from '../../../../state/book/book.selector';
import { BookModalComponent } from '../BookModal/book-modal.component';

/**
 * A visual component that showcases a book
 */
@Component({
  selector: 'librimem-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {

  // NOTE A visual component does not need a reactive variable because it does not treat data
  @Input() book!: IBook

  constructor(private store: Store<IStore>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(BookModalComponent, { data: { isEditing: true, id: this.book.id } })

    dialogRef.afterClosed().subscribe((res) => {
      console.log("from parent closed: ", res)
    })

  }

}
