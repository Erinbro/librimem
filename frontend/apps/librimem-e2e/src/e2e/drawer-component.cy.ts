describe("DrawerComponent", () => {
  beforeEach(() => cy.visit("/books"))

  it("[DrawerComponent] should be displayed", () => {
    const drawerComponent = cy.get('.drawer')
    drawerComponent.should('exit')
  })
  it("[DrawerComponent] should have with 10vw in small breakpoint", () => {
  })
})
