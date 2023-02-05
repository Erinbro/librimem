import { TestBed } from '@angular/core/testing';
import { FlashcardsTableComponent } from './flashcards-table.component';

describe(FlashcardsTableComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(FlashcardsTableComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(FlashcardsTableComponent,);
  })

})
