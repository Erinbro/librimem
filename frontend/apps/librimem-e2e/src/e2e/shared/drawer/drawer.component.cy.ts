describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=drawercomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-drawer').should('exist');
  });
});
