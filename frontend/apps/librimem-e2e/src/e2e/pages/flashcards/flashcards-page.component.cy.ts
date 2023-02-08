describe('librimem', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=flashcardspagecomponent--primary')
  );
  it('should render the component', () => {
    cy.get('librimem-flashcards-page').should('exist');
  });
});
