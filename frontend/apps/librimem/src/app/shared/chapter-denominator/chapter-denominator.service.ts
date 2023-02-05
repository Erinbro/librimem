import { Injectable } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { ChapterDenominatorUtils } from './chapter-denominator.utils';
import { ChapterService } from '../../services/common/chapter.service';

@Injectable({
  providedIn: "root"
})
export class ChapterDenominatorService {


  constructor(private chapterDenominatorUtils: ChapterDenominatorUtils, private chapterService: ChapterService) {
  }

  getSortedChapterIndexes(chapters: IChapter[]) {
    return this.chapterDenominatorUtils.sortArray(chapters)
  }

  parseIndexes(indexes: string[]) {
    return this.chapterDenominatorUtils.parseIndexes(indexes)
  }

}
