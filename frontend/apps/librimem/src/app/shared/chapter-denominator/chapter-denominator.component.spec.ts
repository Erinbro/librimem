import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterDenominatorComponent } from './chapter-denominator.component';

describe('ChapterDenominatorComponent', () => {
  let component: ChapterDenominatorComponent;
  let fixture: ComponentFixture<ChapterDenominatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterDenominatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChapterDenominatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
