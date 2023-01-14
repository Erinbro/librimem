import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../state/store';
import { MatDialog } from '@angular/material/dialog';
import { BookModalComponent } from './components/BookModal/book-modal.component';

@Component({
  selector: 'librimem-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  openModalBol = false

  constructor(private store: Store<IStore>, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openModal() {
    this.openModalBol = true
    this.dialog.open(BookModalComponent, { data: { isEditing: false, id: undefined } }).afterClosed().subscribe(() => {
      this.openModalBol = false
    })

  }



}
