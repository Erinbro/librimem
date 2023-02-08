import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../services/common/chapter.service';
import { ChapterDenominatorService } from './chapter-denominator.service';
import { IChapter } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { selectChapterStateData } from '../../state/chapter/chapter.selectors';
import { entitiesToArray } from '../../utils/entitiesToArray';

@Component({
  selector: 'librimem-chapter-denominator',
  templateUrl: './chapter-denominator.component.html',
  styleUrls: ['./chapter-denominator.component.scss'],
})
export class ChapterDenominatorComponent implements OnInit {

  chapters!: IChapter[]

  chapterTree!: number[][];

  constructor(private store: Store<IStore>, private chapterDenominatorService: ChapterDenominatorService) {

  }

  ngOnInit(): void {
    this.store.select(selectChapterStateData).subscribe({
      next: (chapters) => this.chapters = entitiesToArray(chapters)
    })


  }

}
