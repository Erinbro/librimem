import { ChapterDenominatorUtils } from './chapter-denominator.utils';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { storeEntityGenerator } from '../../state/store';
import chapters from "../../../assets/data/chapters.json";
import { arrayToEntities } from '../../utils/arrayToEntities';
import { globalStore } from '../../state/store';
import { IChapter } from '@librimem/api-interfaces';
import { selectChapterStateData } from '../../state/chapter/chapter.selectors';

const chapterMocks = arrayToEntities(chapters.chapters)

globalStore.chapter.data = chapterMocks

describe("ChapterDenominatorService", () => {
  let chapterDenominatorUtils: ChapterDenominatorUtils;
  const indexes = ["1.1.1.1", "1", "1.1.1.1.1", "1.2.3", "1.3", "3", "1.4"]
  const numberIndexes = [[1, 1, 1, 1], [1], [1, 1, 1, 1, 1], [1, 2, 3], [1, 3], [3], [1, 4]]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterDenominatorUtils]
    })
    chapterDenominatorUtils = TestBed.inject(ChapterDenominatorUtils)
  })

  it("[getNextSmallestIndexByLength()] should return the correct array index", () => {
    const result = chapterDenominatorUtils.getNextSmallestIndexByLength(indexes)

    expect(result).toBe(1)
  })

  it("[orderIndexes()] should order the indexes by length", () => {
    const customIndexes = [[1, 1, 1], [1], [1, 2]]
    const result = chapterDenominatorUtils.sortIndexesByLength(customIndexes)

    expect(result).toEqual([[1], [1, 2], [1, 1, 1]])
  })

  it("[parseIndexes()", () => {
    const result = chapterDenominatorUtils.parseIndexes(indexes)

    expect(result).toEqual(numberIndexes)
  })

})
