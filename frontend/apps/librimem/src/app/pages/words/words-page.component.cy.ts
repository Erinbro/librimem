import { TestBed } from '@angular/core/testing';
import { WordsPageComponent } from './words-page.component';

describe(WordsPageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(WordsPageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(WordsPageComponent,);
  })

})
