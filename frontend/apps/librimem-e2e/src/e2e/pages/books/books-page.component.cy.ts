describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bookspagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-books-page').should('exist');
  });
});
