import { storeEntityGenerator, IStore } from '../../state/store';
import { flashcards, chapters, books } from '../../../assets/data/index';
import { arrayToEntities } from '../arrayToEntities';
import { IFlashcard, IChapter, IBook } from '@librimem/api-interfaces';
import { initialUserState } from '../../state/user/user.reducer';

const flashcardsEntities = arrayToEntities<IFlashcard>(flashcards.flashcards)
const bookEntities = arrayToEntities<IBook>(books)
const chapterEntities = arrayToEntities<IChapter>(chapters.chapters)
const userEntity = {
  user: {
    id: 0,
    username: "",
    password: "",
    token: ""
  },
  isAuthenticated: false
}

/**
 * Class for mocking data
 */
export class Mock {
  /**
   * Creates global store for mocking
   * @returns Global store
   */
  static mockGlobalStore(): IStore {
    const book = storeEntityGenerator<IBook>()
    book.data = bookEntities
    const chapter = storeEntityGenerator<IChapter>()
    chapter.data = chapterEntities
    const flashcard = storeEntityGenerator<IFlashcard>()
    flashcard.data = flashcardsEntities
    return {
      book,
      chapter,
      flashcard,
      user: initialUserState
    }
  }
}
