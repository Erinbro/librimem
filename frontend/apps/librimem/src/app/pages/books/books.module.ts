import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { reducers } from '../../state/reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // lazy load and attach to root store
    StoreModule.forFeature('book', reducers.book),
  ],
})
export class BooksModule { }
