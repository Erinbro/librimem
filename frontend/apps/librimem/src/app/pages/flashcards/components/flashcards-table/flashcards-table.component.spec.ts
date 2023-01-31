import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsTableComponent } from './flashcards-table.component';

describe('FlashcardsTableComponent', () => {
  let component: FlashcardsTableComponent;
  let fixture: ComponentFixture<FlashcardsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashcardsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
