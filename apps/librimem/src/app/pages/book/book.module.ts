import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BookPageComponent } from './book-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../state/reducers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class BookPageModule { }
