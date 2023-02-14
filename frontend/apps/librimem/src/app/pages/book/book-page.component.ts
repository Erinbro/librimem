import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectSelectedBook } from '../../state/book/book.selector';
import { IStore } from '../../state/store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'librimem-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent implements OnInit {

  book!: FormGroup;

  constructor(private store: Store<IStore>, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.store.select(selectSelectedBook).subscribe((selectedBook) => {
      if (!selectedBook) return;
      this.book = this.formBuilder.group(selectedBook);
    })
  }
}
