import { TestBed } from '@angular/core/testing';
import { ReaderInputComponent } from './reader-input.component';

describe(ReaderInputComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(ReaderInputComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(ReaderInputComponent,);
  })

})
