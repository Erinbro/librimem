import { storeEntityGenerator, IStore } from '../../state/store';
import { flashcards, chapters, books } from 'apps/librimem/src/assets/data';
import { arrayToEntities } from '../arrayToEntities';
import { IFlashcard, IChapter, IBook } from '@librimem/api-interfaces';

const flashcardsEntities = arrayToEntities<IFlashcard>(flashcards.flashcards)
const bookEntities = arrayToEntities<IBook>(books)
const chapterEntities = arrayToEntities<IChapter>(chapters.chapters)

/**
 * Class for mocking data
 */
export class Mock {
  /**
   * Creates global store for mocking
   * @returns Global store
   */
  mockGlobalStore(): IStore {
    const book = storeEntityGenerator<IBook>()
    book.data = bookEntities
    const chapter = storeEntityGenerator<IChapter>()
    chapter.data = chapterEntities
    const flashcard = storeEntityGenerator<IFlashcard>()
    flashcard.data = flashcardsEntities
    return {
      book,
      chapter,
      flashcard
    }
  }
}
