import { TestBed } from '@angular/core/testing';
import { FlashcardDialogComponent } from './flashcard-dialog.component';

describe(FlashcardDialogComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(FlashcardDialogComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(FlashcardDialogComponent,);
  })

})
