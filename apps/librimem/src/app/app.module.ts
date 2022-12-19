import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksPageComponent } from './pages/books/books-page.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, BooksPageComponent,],
  imports: [BrowserModule, HttpClientModule, StoreModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
