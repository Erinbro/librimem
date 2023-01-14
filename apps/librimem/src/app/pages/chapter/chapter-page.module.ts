import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterPageRoutingModule } from './chapter-page-routing.module';
import { ChapterPageComponent } from './chapter-page.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './state/state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StateEffects } from './state/state.effects';

@NgModule({
  declarations: [ChapterPageComponent],
  imports: [CommonModule, ChapterPageRoutingModule, StoreModule.forFeature(fromState.stateFeatureKey, fromState.chapterReducer), EffectsModule.forFeature([StateEffects]),],
  providers: [],
})
export class ChapterPageModule { }
