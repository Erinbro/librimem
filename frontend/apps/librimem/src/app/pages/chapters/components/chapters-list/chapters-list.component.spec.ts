import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersListComponent } from './chapters-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import chapters from "../../../../../assets/data/testing/mock-chapters.json"
import { Mock } from '../../../../utils/testing/Mock.testing';
import { arrayToEntities } from '../../../../utils/arrayToEntities';
import { ChapterDenominatorService } from '../../../../shared/chapter-denominator/chapter-denominator.service';
import { DragDropModule } from "@angular/cdk/drag-drop"
import { MatExpansionModule } from "@angular/material/expansion"

const initialState = Mock.mockGlobalStore()
initialState.chapter.data = arrayToEntities(chapters.chapters)

describe('ChaptersListComponent', () => {
  let component: ChaptersListComponent;
  let fixture: ComponentFixture<ChaptersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaptersListComponent],
      providers: [ChapterDenominatorService],
      imports: [provideMockStore({ initialState })]
    }).compileComponents();


    fixture = TestBed.createComponent(ChaptersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
