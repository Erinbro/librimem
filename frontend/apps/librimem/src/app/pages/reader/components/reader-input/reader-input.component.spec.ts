import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderInputComponent } from './reader-input.component';

describe('ReaderInputComponent', () => {
  let component: ReaderInputComponent;
  let fixture: ComponentFixture<ReaderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReaderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
