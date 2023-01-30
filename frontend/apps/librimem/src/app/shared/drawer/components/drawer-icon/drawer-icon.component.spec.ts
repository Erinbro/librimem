import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerIconComponent } from './drawer-icon.component';

describe('DrawerIconComponent', () => {
  let component: DrawerIconComponent;
  let fixture: ComponentFixture<DrawerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
