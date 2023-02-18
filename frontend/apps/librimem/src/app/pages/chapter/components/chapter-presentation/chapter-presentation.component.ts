import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { Subscription } from 'rxjs';
import { selectChapterStateSelection } from '../../../../state/chapter/chapter.selectors';
import { UPDATE_CHAPTER } from '../../../../state/chapter/chapter.actions';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'librimem-chapter-presentation',
  templateUrl: './chapter-presentation.component.html',
  styleUrls: ['./chapter-presentation.component.scss'],
})
export class ChapterPresentationComponent implements OnInit, OnDestroy, OnChanges {
  chapter!: FormGroup;
  chapterSubscription!: Subscription
  valueChangesSubscription!: Subscription

  constructor(
    private store: Store<IStore>,
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.chapterSubscription = this.store.select(selectChapterStateSelection)
      .subscribe((ch) => {
        console.log(`subscribe called`);

        if (!ch) return
        this.chapter = this.builder.group(ch)
      })
    this.chapter.valueChanges.subscribe((v) => {
      console.log(`valueChanges called`);
      const chapter = this.chapter.getRawValue()
      if (!chapter) return
      this.updateChapter()
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ch: ${JSON.stringify(this.chapter)}`);
  }

  ngOnDestroy(): void {
    this.chapterSubscription.unsubscribe()
  }


  toggleFavorite() {
    const chapter = this.chapter.getRawValue()
    this.chapter.patchValue({
      favorite: !chapter.favorite
    })
  }

  updateChapter() {
    console.log(`ch before dispatch: ${JSON.stringify(this.chapter.getRawValue())}`);
    const updatedChapter = this.chapter.getRawValue()
    console.log(`updatedChapter: ${updatedChapter}`);


    this.store.dispatch(UPDATE_CHAPTER({ updatedChapter }))
  }
}

