import { Injectable } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';

@Injectable()
export class ChapterDenominatorService {
  /**
* All the chapters of the selected book
*/
  chapters!: IChapter[];

  /**
   * Set of all the indexes of the chapters
   */
  indexes!: Set<string>

}
