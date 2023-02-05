import { TestBed } from '@angular/core/testing';
import { InfoDialogComponent } from './info-dialog.component';

describe(InfoDialogComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(InfoDialogComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(InfoDialogComponent,);
  })

})
