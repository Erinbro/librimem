import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { Subscription } from 'rxjs';
import { selectChapterStateSelection } from '../../../../state/chapter/chapter.selectors';

@Component({
  selector: 'librimem-chapter-presentation',
  templateUrl: './chapter-presentation.component.html',
  styleUrls: ['./chapter-presentation.component.scss'],
})
export class ChapterPresentationComponent implements OnInit, OnDestroy {
  @Input() chapter!: IChapter;
  chapterSubscription!: Subscription

  constructor(
    private store: Store<IStore>,
  ) { }

  ngOnInit(): void {
    this.chapterSubscription = this.store.select(selectChapterStateSelection).subscribe((ch) => {
      if (!ch) return
      this.chapter = ch
    })
  }

  ngOnDestroy(): void {
    this.chapterSubscription.unsubscribe()
  }
}
