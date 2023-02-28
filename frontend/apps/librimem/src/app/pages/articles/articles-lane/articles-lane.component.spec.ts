import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesLaneComponent } from './articles-lane.component';

describe('ArticlesLaneComponent', () => {
  let component: ArticlesLaneComponent;
  let fixture: ComponentFixture<ArticlesLaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesLaneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
