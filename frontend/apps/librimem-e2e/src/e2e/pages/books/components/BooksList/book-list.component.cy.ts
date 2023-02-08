describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=booklistcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-book-list').should('exist');
  });
});
