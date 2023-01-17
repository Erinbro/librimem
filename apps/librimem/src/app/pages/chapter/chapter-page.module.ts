import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterPageRoutingModule } from './chapter-page-routing.module';
import { ChapterPageComponent } from './chapter-page.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './state/chapter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StateEffects } from './state/chapter.effects';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';

@NgModule({
  declarations: [ChapterPageComponent, ChapterListComponent],
  imports: [
    CommonModule,
    ChapterPageRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.chapterReducer),
    EffectsModule.forFeature([StateEffects]),
  ],
  providers: [],
})
export class ChapterPageModule { }
