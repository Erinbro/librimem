import { TestBed } from '@angular/core/testing';
import { NotesPageComponent } from './notes-page.component';

describe(NotesPageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(NotesPageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(NotesPageComponent,);
  })

})
