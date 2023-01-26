describe('BreadCrumbComponent', () => {
  beforeEach(() => cy.visit('/books/The%20Count%20of'))

  it("[BreadcrumbComponent] should be displayed", () => {
    const breadcrumbComponent = cy.get('.breadcrumb')

    breadcrumbComponent.should("exist");
  })

  it("[BreadcrumbComponent] should navigate to the right site", () => {

  })

  it("[BreadcrumbComponent] should not change the page if we are on the same page", () => {

  })

  /* VISUAL TESTING */
  it("[BreadcrumbComponent] should be under the header", () => {

  })


})
