import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from 'apps/librimem/src/app/state/store';
import { IChapter } from '@librimem/api-interfaces';
import { selectChapterStateData } from '../../../../state/chapter/chapter.selectors';
import { entitiesToArray } from '../../../../utils/entitiesToArray';

@Injectable({
  providedIn: "root"
})
export class ChapterDialogService {

  chapters!: IChapter[];

  constructor(private store: Store<IStore>) {
    store.select(selectChapterStateData).subscribe({
      next: (chapters) => {
        this.chapters = entitiesToArray(chapters)
      }
    })

  }


  /**
  * Checks if the chapter index already exists.
  * All chapter indexes must be unique
  * @param chapter
  */
  public checkIfChapterIndexExists(index: string) {
    this.chapters.forEach((ch) => {
      if (ch.index === index) return true;
    })

    return false;
  }


}
