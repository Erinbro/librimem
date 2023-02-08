import { Injectable, Inject } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { selectChapterStateData } from '../../state/chapter/chapter.selectors';
import { entitiesToArray } from '../../utils/entitiesToArray';

@Injectable({ providedIn: "root" })
/**
 * Class with utility methods for ChapterDenominatorService
 */
export class ChapterDenominatorUtils {


  /**
   * Turns an array of chapters into a tree
   * @param chapters
   * @returns
   */
  public sortArray(chapters: IChapter[]): number[][][] {

    const collectedIndexes = this.collectAllChapterIndexes(chapters)
    const groupedIndexes = this.groupIndexes(collectedIndexes)
    const sortedByLength = this.sortIndexesByLength(groupedIndexes)
    const finalSort = this.sortIndexByNumber(sortedByLength)

    return finalSort

  }

  /**
   * Gathers the index of all chapters
   * and turns them to array of numbers
   * @param chapters
   */
  public collectAllChapterIndexes(chapters: IChapter[]): number[][] {
    const chapterIndexes = new Set<string>()

    chapters.forEach((ch) => {
      chapterIndexes.add(ch.index)
    })

    return this.parseIndexes(Array.from(chapterIndexes));
  }



  /**
   * Groups the provided indexes by
   * their prefix
   * @param indexes
   * @example
   * [[1,1,3], [1,3,5], [2,5,6], [2,3,6]] will be
   * grouped into
   * 1) [[1,1,3], [1,3,5]]
   * 2) [[2,5,6], [2,3,6]]
   * ...
   */
  public groupIndexes(indexes: number[][]): number[][][] {

    let sorted: { chapterIndex: number[], columnIndex: number }[] = [];

    const currentColumnIndex = 0;

    const mappedIndexes = indexes.map((i) => {
      return { chapterIndex: i, columnIndex: i[currentColumnIndex] };
    })

    sorted = mappedIndexes.sort((a, b) => a.columnIndex - b.columnIndex)

    let currentPrefix = sorted[0].columnIndex;
    const distributeToGroups: number[][][] = [[]]
    sorted.forEach((i) => {
      if (i.columnIndex > currentPrefix) {
        currentPrefix = i.columnIndex
        distributeToGroups.push([])
      }
      distributeToGroups[distributeToGroups.length - 1].push(i.chapterIndex)
    })

    return distributeToGroups
  }

  /**
 * Helper method that parses the indexes to array of numbers
 * @param indexes
 * @example
 * "1.1.1" === [1,1,1]
 */
  public parseIndexes(indexes: string[]): number[][] {
    const numberIndexes: number[][] = []
    indexes.forEach((i) => {
      const currentIndex: number[] = []
      for (let j = 0; j < i.length; j++) {
        if (new RegExp(/[0-9]/).test(i[j])) {
          currentIndex.push(Number(i[j]))
        }
      }
      numberIndexes.push(currentIndex)
    })

    return numberIndexes;

  }


  /**
   * Returns the sorted indexes
   * @param indexes
   */
  public sortIndexesByLength(indexes: number[][][]): number[][][] {

    interface IChapterIndexWithLength {
      chapterIndex: number[]
      length: number
    }

    // group
    const indexesWithLength = indexes.map((i) => {
      const currentGroup: Array<IChapterIndexWithLength> = []
      // chapters
      i.forEach((j) => {
        const currentIndexWithLength: IChapterIndexWithLength = { chapterIndex: [], length: 0 }
        // chapter
        currentIndexWithLength.chapterIndex = j
        currentIndexWithLength.length = j.length

        currentGroup.push(currentIndexWithLength)
      })
      return currentGroup
    })

    const sortedIndexesByLength: Array<Array<IChapterIndexWithLength>> = []
    indexesWithLength.forEach((i) => {
      const sortedChapterGroup = i.sort((a, b) => {
        return a.length - b.length
      })
      sortedIndexesByLength.push(sortedChapterGroup)
    })

    return sortedIndexesByLength.map((i) => {
      return i.map(j => {
        const currentChapterIndex = j.chapterIndex
        return currentChapterIndex
      })
    })

  }

  /**
 * Sorts the indexes by their number
 * @param indexes
 */
  public sortIndexByNumber(indexes: number[][][]): number[][][] {
    const sortedFinalIndexes: number[][][] = []

    indexes.forEach((group) => {
      const sortedGroup = group.sort((a, b) => {
        // If length is not the same
        if (a.length !== b.length) {
          if (b.length > a.length) return -1
          else return 1
        }

        let result = 1;
        // If the length is the same then we can compare each number
        a.forEach((currentNumber, currentNumberIndex) => {
          if (currentNumber < b[currentNumberIndex]) result = -1
        })
        return result
      })
      sortedFinalIndexes.push(sortedGroup)
    })

    return sortedFinalIndexes
  }

  flatten(indexes: number[][][]): number[][] {
    const flattenedIndexes: number[][] = []
    indexes.forEach((group) => {
      group.forEach((index) => {
        flattenedIndexes.push(index)
      })
    })

    return flattenedIndexes
  }

  // public convertArrayToTree(indexes: number[][][], chapters: IChapter[]): IChapterTree {
  //   const chapterTree = new ChapterTree();


  //   indexes.forEach((i, index) => {
  //     const currentChapter = chapters.find((v) => v.index === i[index].join("."))
  //     if (currentChapter) {
  //       const chapterChildren = this.findChildrenChapters(i.slice(0, i.length), chapters)
  //       const currentChapterNode = new ChapterNode(currentChapter, chapterChildren)
  //       chapterTree.root = currentChapterNode;
  //     }
  //   })

  //   return chapterTree;
  // }

  // /**
  //  * Helper method that finds the children for a parent chapter.
  //  * It uses recursion.
  //  * @param indexes
  //  * @param chapters
  //  * @returns
  //  */
  // public generateChapterNodes(indexes: number[][], chapters: IChapter[]): IChapterNode[] {
  //   if (indexes.length === 1) {
  //     const soughtChapter = this.findChildrenChapters(indexes,chapters)
  //     const chapterNode = new ChapterNode(soughtChapter,)
  //   }


  // }

  // public findChildrenChapters(indexes: number[][], chapters: IChapter[]): IChapter[] {
  //   const soughtChapters: IChapter[] = []

  //   indexes.forEach((i) => {
  //     const currentIndex = i.join(".")
  //     const foundChapter = chapters.find((ch) => ch.index === currentIndex)
  //     if (foundChapter)
  //       soughtChapters.push(foundChapter)
  //   }



  // }

}

