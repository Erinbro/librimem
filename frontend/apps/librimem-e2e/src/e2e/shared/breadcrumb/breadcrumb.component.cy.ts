describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=breadcrumbcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-breadcrumb').should('exist');
  });
});
