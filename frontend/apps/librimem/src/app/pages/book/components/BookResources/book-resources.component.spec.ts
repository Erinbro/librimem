import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookResourcesComponent } from './book-resources.component';

describe('BookResourcesComponent', () => {
  let component: BookResourcesComponent;
  let fixture: ComponentFixture<BookResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookResourcesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
