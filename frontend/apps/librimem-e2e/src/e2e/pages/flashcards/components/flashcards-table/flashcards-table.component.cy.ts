describe('librimem', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=flashcardstablecomponent--primary')
  );
  it('should render the component', () => {
    cy.get('librimem-flashcards-table').should('exist');
  });
});
