import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterPresentationComponent } from './chapter-presentation.component';

describe('ChapterPresentationComponent', () => {
  let component: ChapterPresentationComponent;
  let fixture: ComponentFixture<ChapterPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterPresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChapterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
