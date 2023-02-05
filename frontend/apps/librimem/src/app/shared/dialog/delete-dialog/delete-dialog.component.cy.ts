import { TestBed } from '@angular/core/testing';
import { DeleteDialogComponent } from './delete-dialog.component';

describe(DeleteDialogComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(DeleteDialogComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(DeleteDialogComponent,);
  })

})
