import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerComponent } from './drawer.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Mock } from '../../utils/testing/Mock.testing';
import { IStore } from '../../state/store';
import { SELECT_BOOK } from '../../state/book/book.action';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;
  const globalStore = new Mock().mockGlobalStore()
  let store: MockStore<IStore>


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerComponent],
      providers: [provideMockStore({ initialState: globalStore })]
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be rendered', () => {
    expect(component).toBeTruthy();
  });

  it("should only show the book icon at the beginning", () => {
    const drawerComponent = fixture.debugElement.queryAll(By.css(".drawer__icons"))

    expect(drawerComponent.length === 1).toBeTruthy()
    expect(drawerComponent[0].children.length === 1).toBeTruthy()
    expect(drawerComponent[0].children[0].nativeElement.id === "Books")
    // expect(drawerComponent as DebugElement)
  })

  it("should show the chapter icon if a book is selected", () => {
    store.dispatch(SELECT_BOOK({ id: 1 }))
  })
});
