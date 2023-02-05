import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersListComponent } from './chapters-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import chapters from "../../../../../assets/data/testing/mock-chapters.json"
import { Mock } from '../../../../utils/testing/Mock.testing';
import { arrayToEntities } from '../../../../utils/arrayToEntities';
import { ChapterDenominatorService } from '../../../../shared/chapter-denominator/chapter-denominator.service';
import { DragDropModule } from "@angular/cdk/drag-drop"
import { MatExpansionModule } from "@angular/material/expansion"

const initialState = new Mock().mockGlobalStore()
initialState.chapter.data = arrayToEntities(chapters.chapters)

describe('ChaptersListComponent', () => {
  let component: ChaptersListComponent;
  let fixture: ComponentFixture<ChaptersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaptersListComponent],
      providers: [ChapterDenominatorService],
      imports: [provideMockStore({ initialState }), DragDropModule, MatExpansionModule]
    }).compileComponents();


    fixture = TestBed.createComponent(ChaptersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have the proper chaptersWithParent array", () => {
    expect(component.chaptersWithParent).toEqual(
      [
        {
          parent: {
            "id": "4",
            "entityId": 1,
            "title": "some title",
            "read": false,
            "status": "READING",
            "progress": 90,
            "index": "1",
            "createdAt": "2023-02-03T15:10:55.834Z",
            "updatedAt": "2023-02-03T15:10:55.834Z",
            "type": "CHAPTER"

          }, children: [
            {
              "id": "1",
              "entityId": 1,
              "title": "introduction",
              "read": false,
              "status": "TO_READ",
              "progress": 1,
              "index": "1.1",
              "createdAt": "2023-02-03T15:10:55.834Z",
              "updatedAt": "2023-02-03T15:10:55.834Z",
              "type": "CHAPTER"
            },
            {
              "id": "2",
              "entityId": 1,
              "title": "some title",
              "read": false,
              "status": "READING",
              "progress": 66,
              "index": "1.3",
              "createdAt": "2023-02-03T15:10:55.834Z",
              "updatedAt": "2023-02-03T15:10:55.834Z",
              "type": "CHAPTER"
            }
          ]
        },
        {
          parent: {
            "id": "3",
            "entityId": 1,
            "title": "some title",
            "read": false,
            "status": "READING",
            "progress": 90,
            "index": "3.5",
            "createdAt": "2023-02-03T15:10:55.834Z",
            "updatedAt": "2023-02-03T15:10:55.834Z",
            "type": "CHAPTER"
          }, children: []
        }
      ]
    )

  })
});
