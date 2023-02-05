import { TestBed } from '@angular/core/testing';
import { NotePageComponent } from './note-page.component';

describe(NotePageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(NotePageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(NotePageComponent,);
  })

})
