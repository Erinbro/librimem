import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { SELECT_BOOK, UPDATE_BOOK } from '../../../../state/book/book.action';
import { IStore } from '../../../../state/store';
import { MatDialog } from '@angular/material/dialog';
import { selectBookStateIsSelecting } from '../../../../state/book/book.selector';
import { BookModalComponent } from '../BookModal/book-modal.component';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private store: Store<IStore>, private dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // openDialog() {
  //   this.store.dispatch(SELECT_BOOK({ id: this.book.id }));

  //   this.dialog.open(BookModalComponent, { data: { isEditing: true, id: this.book.id } })
  // }

  navigateToBookPage() {
    this.store.dispatch(SELECT_BOOK({ id: this.book.id }))

    // NOTE We have to specify 'relativeTo' becauce we go to a child component
    this.router.navigate([`./${this.book.title}`], { relativeTo: this.activatedRoute })
  }

  // FIXME deletes book
  deleteBook(ev: MouseEvent) {
    ev.preventDefault();
    ev.stopPropagation()
  }


}
