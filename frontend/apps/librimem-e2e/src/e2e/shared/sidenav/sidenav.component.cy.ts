describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidenavcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-sidenav').should('exist');
  });
});
