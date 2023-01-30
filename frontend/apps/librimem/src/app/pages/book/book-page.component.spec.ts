import { TestBed } from "@angular/core/testing"
import { BookPageComponent } from "./book-page.component"
import { provideMockStore } from '@ngrx/store/testing';
import { FormBuilder } from '@angular/forms';
import { storeEntityGenerator } from '../../state/store';
import { IBook } from '@librimem/api-interfaces';
import { Book } from '../../models/Book';
import { By } from "@angular/platform-browser";

describe("BookPageComponent", () => {
  const book = (new Book() as IBook)
  book.id = 1
  book.title = "title"

  const initialState = {
    book: storeEntityGenerator<IBook>()
  }

  initialState.book.data[1] = book
  initialState.book.selection.data = book

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BookPageComponent],
      providers: [provideMockStore({ initialState }), FormBuilder]
    }).compileComponents()
  })

  it("should be rendered", () => {
    const fixture = TestBed.createComponent(BookPageComponent)
    const bookPageComponent = fixture.componentInstance
    expect(bookPageComponent).toBeTruthy()
  })

  it("should contain the title of the book", async () => {
    const fixture = TestBed.createComponent(BookPageComponent)
    const title = fixture.debugElement.query(By.css('.book__title'))
    expect(title).toBeTruthy()

  })
})
