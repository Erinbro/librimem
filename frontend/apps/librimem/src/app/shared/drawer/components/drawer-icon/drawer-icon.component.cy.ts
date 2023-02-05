import { TestBed } from '@angular/core/testing';
import { DrawerIconComponent } from './drawer-icon.component';

describe(DrawerIconComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(DrawerIconComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(DrawerIconComponent,);
  })

})
