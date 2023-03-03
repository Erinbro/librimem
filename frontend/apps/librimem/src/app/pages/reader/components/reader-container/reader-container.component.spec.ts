import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderContainerComponent } from './reader-container.component';

describe('ReaderContainerComponent', () => {
  let component: ReaderContainerComponent;
  let fixture: ComponentFixture<ReaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
