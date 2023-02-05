import { TestBed } from '@angular/core/testing';
import { BookModalComponent } from './book-modal.component';

describe(BookModalComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(BookModalComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(BookModalComponent,);
  })

})
