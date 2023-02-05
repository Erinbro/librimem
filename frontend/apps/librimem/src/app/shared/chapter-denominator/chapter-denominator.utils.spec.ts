import { ChapterDenominatorUtils } from './chapter-denominator.utils';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { storeEntityGenerator } from '../../state/store';
import chapters from "../../../assets/data/testing/mock-chapters.json";
import { arrayToEntities } from '../../utils/arrayToEntities';
import { globalStore } from '../../state/store';
import { IChapter } from '@librimem/api-interfaces';
import { selectChapterStateData } from '../../state/chapter/chapter.selectors';


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

  it("[collectAllChapterIndexes()] should get all chapter indexes", () => {
    const result = chapterDenominatorUtils.collectAllChapterIndexes(chapters.chapters);

    expect(result).toEqual([[1, 1], [1, 3], [3, 5], [1]])

  })


  it("[sortIndexesByLength()] should order the indexes by length", () => {
    const indexes = [
      [[1, 1], [1, 3], [1]],
      [[3, 5]]
    ]

    const result = chapterDenominatorUtils.sortIndexesByLength(indexes)

    expect(result).toEqual([
      [[1], [1, 1], [1, 3]],
      [[3, 5]]
    ])
  })

  it("[sortIndexByNumber()] should sort the index by number", () => {
    const indexes = [
      [[1], [1, 1], [1, 1, 2], [1, 1, 1]],
      [[2], [2, 1], [2, 3], [2, 2]]
    ]

    const result = chapterDenominatorUtils.sortIndexByNumber(indexes)

    expect(result).toEqual([
      [[1], [1, 1], [1, 1, 1], [1, 1, 2]],
      [[2], [2, 1], [2, 2], [2, 3]]
    ])
  })

  it("[parseIndexes()", () => {
    const result = chapterDenominatorUtils.parseIndexes(indexes)

    expect(result).toEqual(numberIndexes)
  })

  it("[groupIndexes()] should group indexes by their prefix", () => {
    const indexes = [[1, 1], [1, 3], [3, 5], [1]]

    const result = chapterDenominatorUtils.groupIndexes(indexes)

    expect(result).toEqual([
      [[1, 1], [1, 3], [1]],
      [[3, 5]]
    ])

  })

  it("[flatten()] should flatten the array", () => {
    const indexGroups = [
      [[1, 1], [1, 3], [1]],
      [[3, 5]]
    ]

    const result = chapterDenominatorUtils.flatten(indexGroups)

    expect(result).toEqual(
      [[1, 1], [1, 3], [1], [3, 5]]
    )
  })

})
