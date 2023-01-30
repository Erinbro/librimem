import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { selectSelectedBook } from '../../state/book/book.selector';
import { timeStamp } from 'console';

@Component({
  selector: 'librimem-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  icons = [
    {
      src: "./assets/icons/books.png", name: "Books",
      path: "/books"
    },

  ]

  /**
   * Decides if a book was selected
   */
  hasSelectedBook = false

  constructor(private store: Store<IStore>) { }

  ngOnInit(): void {
    this.store.select(selectSelectedBook)
      .subscribe((selectedBook) => {
        console.log(`[Drawer] selectedBook: ${JSON.stringify(selectedBook)}`);

        // If a book is selected
        if (selectedBook && !this.hasSelectedBook) {
          this.addBookAttributes()
          this.hasSelectedBook = true
        }
      })
  }

  removeBookAttributes() {
    this.icons = [this.icons[0]]
    this.hasSelectedBook = false;
  }

  addBookAttributes() {
    this.hasSelectedBook = true
    this.icons =
      this.icons.concat(
        [{
          src: "../../../assets/icons/flashcard.png",
          name: "Flashcards",
          path: "books"
        },
        {
          src: "../../../assets/icons/notes.png",
          name: "Notes",
          path: "books/book/chapters/chapter/notes"
        },
        {
          src: "../../../assets/icons/profile.png",
          name: "Profile",
          path: "profile"
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
        }])
  }
}
