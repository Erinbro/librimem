import { TestBed } from '@angular/core/testing';
import { ReaderPageComponent } from './reader-page.component';

describe(ReaderPageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(ReaderPageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(ReaderPageComponent,);
  })

})
