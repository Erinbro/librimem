import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from "@ngrx/store/testing"
import { BookCardComponent } from './book-card.component';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookCardComponent],
      providers: [provideMockStore({ initialState: {} })],

    }).compileComponents();

    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // READ
  it("should show the data of the book", () => {

  })


  // CREATE
  it("should open the dialog to create a new book", () => {

  })

  // DELETE
  it("should delete a book", () => {

  })



});
