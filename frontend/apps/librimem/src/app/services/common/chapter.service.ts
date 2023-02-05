import { Injectable } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { selectChapterStateData } from '../../state/chapter/chapter.selectors';
import { entitiesToArray } from '../../utils/entitiesToArray';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ChapterService {
  /**
   *
* All the chapters of the selected book
*/
  chapters: Subject<IChapter[]> = new Subject();

  /**
   * Set of all the indexes of the chapters
   */
  indexes!: Set<string>

  constructor(private store: Store<IStore>) {
    store.select(selectChapterStateData).subscribe({
      next: (chapters) => {
        this.chapters.next(entitiesToArray(chapters));
      }
    })
  }


}
