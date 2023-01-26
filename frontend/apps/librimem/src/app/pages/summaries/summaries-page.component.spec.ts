import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesPageComponent } from './summaries-page.component';

describe('SummariesPageComponent', () => {
  let component: SummariesPageComponent;
  let fixture: ComponentFixture<SummariesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummariesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummariesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
