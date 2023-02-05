import { TestBed } from '@angular/core/testing';
import { SummariesPageComponent } from './summaries-page.component';

describe(SummariesPageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(SummariesPageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(SummariesPageComponent,);
  })

})
