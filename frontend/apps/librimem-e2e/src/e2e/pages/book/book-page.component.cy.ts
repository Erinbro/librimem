describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bookpagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-book-page').should('exist');
  });
});
