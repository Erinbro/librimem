describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=notespagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-notes-page').should('exist');
  });
});
