import { Injectable, Inject } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { IChapterHierachry } from './chapter-hierarchy.interface';
import { Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { selectChapterStateData } from '../../state/chapter/chapter.selectors';
import { entitiesToArray } from '../../utils/entitiesToArray';

/**
 * Class with utility methods for ChapterDenominatorService
 */
export class ChapterDenominatorUtils {

  public groupToHierarchy(chapters: IChapter[]): IChapterHierachry {
    const chaptersCopy = { ...chapters }
    /**
     * Distinguishes the chapters by their index
     */
    const chapterDistributor = new Map<string, IChapter>();

    const chapterHierarchy: IChapterHierachry = {
      index: "1",
      sub:
        [
          {
            index: "1.1",
            sub:
              [
                {
                  index: "1.1.1"
                },
                {
                  index: "1.1.2"
                },
                {
                  index: "1.1.3"
                },
              ]
          },
          {
            index: "1.2",
            sub: [{ index: "1.2.1" }]
          }
        ]
    }

    const newChapterHierarchy: IChapterHierachry = {

    }


    chapters.forEach((ch, i) => {
      newChapterHierarchy.chapter = ch;
      newChapterHierarchy.index = ch.index;

    })

    return {}

  }

  /**
   * Gathers the index of all chapters
   * @param chapters
   */
  public collectAllChapterIndexes(chapters: IChapter[]) {
    const chapterIndexes = new Set<string>()

    chapters.forEach((ch) => {
      chapterIndexes.add(ch.index)
    })

    return chapterIndexes;
  }


  /**
   * Decides if the chapter with the provided
   * index has children chapters
   * @param index
   */
  public chapterHasSubchapter(index: string): boolean {
    return true;

  }

  /**
   * Orderes the indexes
   * @param indexes
   */
  // public orderIndexes(indexes: string[]): string[] {
  //   const orderedIndexes: string[] = []


  //   let longestIndex = 0
  //   indexes.forEach((i) => i.length > longestIndex ? longestIndex = i.length : null)

  //   for (let i = 0; i < longestIndex; i++) {



  //   }

  //   return orderedIndexes;
  // }

  /**
   * Sorts the indexes by their number
   * @param indexes
   */
  public sortIndexByNumber(indexes: number[][]): number[][] {


    return [[1]]

  }


  /**
   * Parses the indexes to array of numbers
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
  public sortIndexesByLength(indexes: number[][]): number[][] {

    return indexes.sort((a, b) => (a.length - b.length))
  }



  /**
   * Gets the array index of the next smallest index by length
   * @param indexes Array index
   */
  public getNextSmallestIndexByLength(indexes: string[]): number {
    let nextSmallestIndex = indexes[0].length;

    for (let i = 1; i < indexes.length; i++) {
      if (nextSmallestIndex > indexes[i].length) {
        nextSmallestIndex = indexes[i].length
      }
    }

    return nextSmallestIndex;
  }


}
