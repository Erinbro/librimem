import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadableInputComponent } from './readable-input.component';

describe('ReadableInputComponent', () => {
  let component: ReadableInputComponent;
  let fixture: ComponentFixture<ReadableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadableInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
