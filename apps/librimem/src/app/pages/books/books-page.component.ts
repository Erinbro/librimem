import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../state/store';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'librimem-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  // NOTE We need to know if a book was selected in order to 'invoke' BookDialogComponent
  isSelecting$!: Observable<boolean>;

  constructor(private store: Store<IStore>, private dialog: MatDialog) { }

  ngOnInit(): void {

  }




}
