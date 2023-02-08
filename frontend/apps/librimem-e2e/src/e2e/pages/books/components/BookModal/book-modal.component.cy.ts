describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bookmodalcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-book-modal').should('exist');
  });
});
