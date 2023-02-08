import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { selectSelectedBook } from '../../state/book/book.selector';
import { timeStamp } from 'console';
import { selectChapterStateSelection } from '../../state/chapter/chapter.selectors';
import { IBook, IChapter } from '@librimem/api-interfaces';

@Component({
  selector: 'librimem-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  icons: { name: string, path: string, src: string }[]
    = [
      {
        src: "./assets/icons/books.png", name: "Books",
        path: "books"
      },
    ]

  /**
   * The direct attributes for a book
   */
  bookAttributes = [{
    src: "../../../assets/icons/chapters.png",
    name: "Chapters",
    path: "books/book/chapters"
  },]

  /**
   * The direct attributes for a chapter
   */
  chapterAttributes = [
    {
      src: "../../../assets/icons/flashcard.png",
      name: "Flashcards",
      path: "books/book/chapters/chapter/flashcards"
    },
    {
      src: "../../../assets/icons/notes.png",
      name: "Notes",
      path: "books/book/chapters/chapter/notes"
    },
    {
      src: "../../../assets/icons/quotation.png",
      name: "Quotation",
      path: "books/book/chapters/chapter/quotations"
    },
    {
      src: "../../../assets/icons/summary.png",
      name: "Summary",
      path: "books/book/chapters/chapter/summaries"
    },
    {
      src: "../../../assets/icons/profile.png",
      name: "Profile",
      path: "profile"
    },
  ]



  hasSelectedBook = false;
  /**
   * The selected book
   */
  selectedBookTitle: undefined | string;

  /**
   * Decides if a chapter is selected
   */
  hasSelectedChapter = false
  /**
   * The selected chapter
   */
  selectedChapterTitle: undefined | string;

  constructor(private store: Store<IStore>) { }

  ngOnInit(): void {
    this.store.select(selectSelectedBook)
      .subscribe((selectedBook) => {
        console.log(`[Drawer] selectedBook: ${JSON.stringify(selectedBook)}`);

        // If a book is selected
        if (selectedBook) {
          this.hasSelectedBook = true;
          this.selectedBookTitle = selectedBook.title
          this.addBookAttributes()
          this.updateAttributes()
        } else {
          this.hasSelectedBook = false
          this.selectedBookTitle = undefined
          this.removeBookAttributes()
        }
      })

    this.store.select(selectChapterStateSelection)
      .subscribe((selectedChapter) => {
        if (selectedChapter && !this.hasSelectedChapter) {
          this.hasSelectedChapter = true
          this.selectedChapterTitle = selectedChapter.title
          this.addChapterAttributes()
          this.updateAttributes()
        }
        else {
          this.hasSelectedChapter = false
          this.selectedChapterTitle = undefined
          this.removeChapterAttributes()
        }
      })
  }

  removeBookAttributes() {
    this.icons = [this.icons[0]]
  }


  addBookAttributes() {
    this.icons =
      this.icons.concat(
        this.bookAttributes
      )
    // this.updateBookAttributes()
  }

  addChapterAttributes() {
    this.icons = this.icons.concat(this.chapterAttributes)
  }

  removeChapterAttributes() {
    this.icons = this.icons.slice(0, 2)
    console.log(`new icons: ${JSON.stringify(this.icons)}`);

  }

  /**
   * Replaces the param placeholder
   */
  updateAttributes() {
    switch (this.selectedBookTitle !== undefined) {
      case false:
        break;

      case true:
        // eslint-disable-next-line no-case-declarations
        const newIcons = this.icons.map((ic) => {
          if (!this.selectedBookTitle) return
          const updatedPath = ic.path.replace(
            new RegExp("\\b" + "book" + "\\b", "gi")
            , this.selectedBookTitle)
          console.log(`updatedPath: ${updatedPath}`);

          ic.path = updatedPath
          return ic
        })

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.icons = newIcons

        switch (this.hasSelectedChapter) {
          case false:
            break;
          case true:
            // eslint-disable-next-line no-case-declarations
            const newIcons = this.icons.map((ic) => {
              if (!this.selectedChapterTitle) return
              const updatedPath = ic.path.replace(new RegExp("\\b" + "chapter" + "\\b", "gi"), this.selectedChapterTitle)
              ic.path = updatedPath
              return ic
            })

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.icons = newIcons


            break;
        }
    }
  }

}
