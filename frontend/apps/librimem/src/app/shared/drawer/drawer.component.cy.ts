import { TestBed } from '@angular/core/testing';
import { DrawerComponent } from './drawer.component';

describe(DrawerComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(DrawerComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(DrawerComponent,);
  })

})
