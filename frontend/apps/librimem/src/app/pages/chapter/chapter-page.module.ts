import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterPageComponent } from './chapter-page.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';

@NgModule({
  declarations: [ChapterPageComponent, ChapterListComponent],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class ChapterPageModule { }
