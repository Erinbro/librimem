import { Component, Input, OnInit } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../../services/router/router.service';
import { Store } from '@ngrx/store';
import { SELECT_CHAPTER } from '../../../../state/chapter/chapter.actions';

@Component({
  selector: 'librimem-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.scss'],
})
export class ChapterCardComponent {
  @Input() chapter!: IChapter

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private routerService: RouterService, private store: Store) { }


  navigateToChapterPage() {
    this.store.dispatch(SELECT_CHAPTER({ selectedChapter: this.chapter }))
    const route = this.routerService.navigate(
      "books/book/chapters/chapter"
    )

    this.router.navigate(route)
  }

}
