import { TestBed } from '@angular/core/testing';
import { ChapterPageComponent } from './chapter-page.component';

describe(ChapterPageComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(ChapterPageComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(ChapterPageComponent,);
  })

})
