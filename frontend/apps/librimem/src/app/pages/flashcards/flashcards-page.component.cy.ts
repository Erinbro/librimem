import { TestBed } from '@angular/core/testing';
import { FlashcardsPageComponent } from './flashcards-page.component';

describe(FlashcardsPageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(FlashcardsPageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(FlashcardsPageComponent,);
  })

})
