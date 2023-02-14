import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IStore } from '../../state/store';
import { Store } from '@ngrx/store';
import { SELECT_CHAPTER } from '../../state/chapter/chapter.actions';
import { selectChapterStateSelection } from '../../state/chapter/chapter.selectors';

@Component({
  selector: 'librimem-chapter-page',
  template: `
  <div class="chapter-page">
    <div class="chapter-page__presentation">
      <librimem-chapter-presentation />
    </div>
  </div>
  `,
  styleUrls: ['./chapter-page.component.scss'],
  providers: [],
})
export class ChapterPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }
}
