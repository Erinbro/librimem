import { TestBed } from '@angular/core/testing';
import { WordPageComponent } from './word-page.component';

describe(WordPageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(WordPageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(WordPageComponent,);
  })

})
