import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectSelectedBook } from '../../state/book/book.selector';
import { IStore } from '../../state/store';
import { Router } from '@angular/router';

@Component({
  selector: 'librimem-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent implements OnInit {

  book!: FormGroup;

  constructor(private store: Store<IStore>, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    console.log(`[BookPageComponent] in book page`);
    console.log(`[BookPageComponent] ${this.router.url}`);

    this.store.select(selectSelectedBook).subscribe((selectedBook) => {
      if (!selectedBook) return;
      console.log(`[BookPageComponent] Fetched selected book`);
      this.book = this.formBuilder.group(selectedBook);
    })
  }
}
