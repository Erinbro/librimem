import { TestBed } from '@angular/core/testing';
import { BooksPageComponent } from './books-page.component';

describe(BooksPageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(BooksPageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(BooksPageComponent,);
  })

})
