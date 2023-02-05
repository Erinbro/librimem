import { TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';

describe(ToolbarComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(ToolbarComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(ToolbarComponent,);
  })

})
