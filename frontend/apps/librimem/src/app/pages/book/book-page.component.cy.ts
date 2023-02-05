import { TestBed } from '@angular/core/testing';
import { BookPageComponent } from './book-page.component';

describe(BookPageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(BookPageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(BookPageComponent,);
  })

})
