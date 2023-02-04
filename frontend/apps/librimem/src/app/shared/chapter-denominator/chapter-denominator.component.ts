import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../services/common/chapter.service';
import { ChapterDenominatorService } from './chapter-denominator.service';
import { IChapter } from '@librimem/api-interfaces';

@Component({
  selector: 'librimem-chapter-denominator',
  templateUrl: './chapter-denominator.component.html',
  styleUrls: ['./chapter-denominator.component.scss'],
})
export class ChapterDenominatorComponent implements OnInit {

  chapters!: IChapter[]

  chapterTree!: number[][][];

  constructor(private chapterService: ChapterService, private chapterDenominatorService: ChapterDenominatorService) {

  }

  ngOnInit(): void {
    this.chapterService.getChaptersObservable().subscribe({
      next: (chapters) => this.chapters = chapters
    })

    this.chapterTree = this.chapterDenominatorService.getChapterTree(this.chapters)
  }

}
