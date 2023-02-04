import { Injectable } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { ChapterDenominatorUtils } from './chapter-denominator.utils';
import { ChapterService } from '../../services/common/chapter.service';

@Injectable()
export class ChapterDenominatorService {

  chapters!: IChapter[]

  constructor(private chapterDenominatorUtils: ChapterDenominatorUtils, private chapterService: ChapterService) {
    chapterService.getChaptersObservable().subscribe({
      next: (chapters) => {
        this.chapters = chapters
      }
    })

  }

  getChapterTree(chapters: IChapter[]) {
    return this.chapterDenominatorUtils.arrayToTree(chapters)
  }

}
