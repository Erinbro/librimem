import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from "@ngrx/store/testing"

import { BookListComponent } from './book-list.component';
import { storeEntityGenerator } from '../../../../state/store';
import { IBook } from '@librimem/api-interfaces';

const initialState = storeEntityGenerator<IBook>()

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [provideMockStore({ initialState })]

    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
