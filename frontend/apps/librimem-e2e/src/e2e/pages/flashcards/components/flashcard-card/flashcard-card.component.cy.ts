describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=flashcardcardcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-flashcard-card').should('exist');
  });
});
