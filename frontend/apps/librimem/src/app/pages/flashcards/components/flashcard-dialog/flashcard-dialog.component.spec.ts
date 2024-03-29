import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardDialogComponent } from './flashcard-dialog.component';

describe('FlashcardDialogComponent', () => {
  let component: FlashcardDialogComponent;
  let fixture: ComponentFixture<FlashcardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashcardDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
