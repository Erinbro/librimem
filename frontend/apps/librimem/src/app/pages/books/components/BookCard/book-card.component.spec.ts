import { TestBed } from '@angular/core/testing';
import { BookCardComponent } from './book-card.component';
import { BreadcrumbComponent } from '../../../../shared/breadcrumb/breadcrumb.component';
import { Book } from '../../../../models/Book';
import { IBook } from '@librimem/api-interfaces';
describe("BookcardComponent", () => {

  const book = (new Book() as IBook)
  book.id = 3
  book.title = "title"

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BookCardComponent],
    }).compileComponents()
  })


  it("should be rendered", () => {
    const fixture = TestBed.createComponent(BreadcrumbComponent)
    const breadcrumbComponent = fixture.debugElement.componentInstance;
    breadcrumbComponent.
      expect(breadcrumbComponent).toBeTruthy();
  })

  it("should have the correct title", () => {
    const fixture = TestBed.createComponent(BreadcrumbComponent)
    const breadcrumbComponent = fixture.debugElement.componentInstance
    breadcrumbComponent.book = book
    expect(breadcrumbComponent.book.title).toEqual(book.title)
  })
})
