import { TestBed } from '@angular/core/testing';
import { FlashcardCardComponent } from './flashcard-card.component';

describe(FlashcardCardComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(FlashcardCardComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(FlashcardCardComponent,);
  })

})
