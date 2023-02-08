describe('librimem', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=drawericoncomponent--primary&args=icon;')
  );
  it('should render the component', () => {
    cy.get('librimem-drawer-icon').should('exist');
  });
});
