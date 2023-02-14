import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { SELECT_BOOK, DELETE_BOOK } from '../../../../state/book/book.action';
import { IStore } from '../../../../state/store';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * @tutorial breadcrumb here tutorial
 */
@Component({
  selector: 'librimem-book-card',
  template: `
  <mat-card class="book__card" (click)="navigateToBookPage()">
    <mat-card-title>
      {{ book.title }}
    </mat-card-title>
    <mat-card-subtitle>
      <img mat-card-image src="{{ book.cover }}" />
    </mat-card-subtitle>
    <mat-card-header>
      <!-- NOTE icon that deletes the book -->
      <div class="card__delete" (click)="deleteBook()">
        <librimem-delete-button (click)="deleteBook()">
          <img src="../../../../../assets/icons/delete.png" alt="delete"
          style="width: 20px; height: 20px;"
           />
        </librimem-delete-button>
      </div>
    </mat-card-header>
    <mat-card-content>
      <p>language: {{ book.language }}</p>
    </mat-card-content>
  </mat-card>
  `,
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {

  // NOTE A visual component does not need a reactive variable because it does not treat data
  @Input() book!: IBook

  constructor(private store: Store<IStore>, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  navigateToBookPage() {
    this.store.dispatch(SELECT_BOOK({ id: this.book.id }))

    // NOTE We have to specify 'relativeTo' becauce we go to a child component
    this.router.navigate([`./${this.book.title}`], { relativeTo: this.activatedRoute })
  }

  // FIXME deletes book
  deleteBook() {
    this.store.dispatch(DELETE_BOOK({ bookId: this.book.id }))
  }


}
