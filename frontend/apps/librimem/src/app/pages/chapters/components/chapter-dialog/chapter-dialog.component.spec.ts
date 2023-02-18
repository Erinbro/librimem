import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterDialogComponent } from './chapter-dialog.component';
import { Mock } from '../../../../utils/testing/Mock.testing';
import { arrayToEntities } from '../../../../utils/arrayToEntities';
import { chapters } from 'apps/librimem/src/assets/data';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IStore } from 'apps/librimem/src/app/state/store';
import { selectChapterStateData } from '../../../../state/chapter/chapter.selectors';
import { IChapter } from '@librimem/api-interfaces';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { PrimaryButtonComponent } from '../../../../shared/buttons/primary-button/primary-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { entitiesToArray } from '../../../../utils/entitiesToArray';

const initialState = Mock.mockGlobalStore()
initialState.chapter.data = arrayToEntities(chapters.chapters)

describe('ChapterDialogComponent', () => {
  let component: ChapterDialogComponent;
  let fixture: ComponentFixture<ChapterDialogComponent>;
  let store: MockStore<IStore>
  let chapterStateData: { [id: number]: IChapter }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterDialogComponent, PrimaryButtonComponent],
      providers: [provideMockStore({ initialState }),
        MatSnackBar,
        FormBuilder
      ],
      imports: [
        // MatDialogRef<ChapterDialogComponent>,
        NoopAnimationsModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChapterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should add chapter to store", () => {
    const entityId = 100
  })

  it("should add chapter to IndexedDB", () => {

  })
});
