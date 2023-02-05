import { TestBed } from '@angular/core/testing';
import { ErrorDialogComponent } from './error-dialog.component';

describe(ErrorDialogComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(ErrorDialogComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(ErrorDialogComponent,);
  })

})
