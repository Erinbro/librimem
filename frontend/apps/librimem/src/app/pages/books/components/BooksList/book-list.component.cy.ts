import { TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';

describe(BookListComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(BookListComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(BookListComponent,);
  })

})
