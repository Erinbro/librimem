/* eslint-disable prefer-const */
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { BookModalComponent } from './book-modal.component';

describe('BookModalComponent', () => {
  let component: BookModalComponent;
  let fixture: ComponentFixture<BookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookModalComponent]
    }).compileComponents()
  })


  fixture = TestBed.createComponent(BookModalComponent)
  component = fixture.componentInstance;
  fixture.detectChanges()

  it("should be created", () => {
    expect(component).toBeTruthy()
  })

  it("should load a FormGroup with empty strings", () => {

  })

  it("should close when the user clicks the add button", () => {

  })

  it("should close if the user clicks outside of the modal", () => {

  })
})
