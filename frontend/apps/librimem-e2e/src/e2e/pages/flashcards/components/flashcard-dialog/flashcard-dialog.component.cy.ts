describe('librimem', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=flashcarddialogcomponent--primary')
  );
  it('should render the component', () => {
    cy.get('librimem-flashcard-dialog').should('exist');
  });
});
