import { TestBed } from '@angular/core/testing';
import { BookCardComponent } from './book-card.component';

describe(BookCardComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(BookCardComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(BookCardComponent,);
  })

})
