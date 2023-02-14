import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { Subscription } from 'rxjs';
import { selectChapterStateSelection } from '../../../../state/chapter/chapter.selectors';
import { UPDATE_CHAPTER } from '../../../../state/chapter/chapter.actions';

@Component({
  selector: 'librimem-chapter-presentation',
  templateUrl: './chapter-presentation.component.html',
  styleUrls: ['./chapter-presentation.component.scss'],
})
export class ChapterPresentationComponent implements OnInit, OnDestroy, OnChanges {
  chapter!: IChapter;
  chapterSubscription!: Subscription

  constructor(
    private store: Store<IStore>,
  ) { }

  ngOnInit(): void {
    this.chapterSubscription = this.store.select(selectChapterStateSelection)
      .subscribe((ch) => {

        if (!ch) return
        this.chapter = { ...ch }
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ch: ${JSON.stringify(this.chapter)}`);
  }

  ngOnDestroy(): void {
    this.updateChapter()
    this.chapterSubscription.unsubscribe()
  }


  toggleFavorite() {
    this.chapter.favorite = !this.chapter.favorite
  }

  updateChapter() {
    console.log(`ch before dispatch: ${JSON.stringify(this.chapter)}`);

    this.store.dispatch(UPDATE_CHAPTER({ updatedChapter: this.chapter }))
  }
}

