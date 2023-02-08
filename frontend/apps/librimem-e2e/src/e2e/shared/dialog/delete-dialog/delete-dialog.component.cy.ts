describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=deletedialogcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-delete-dialog').should('exist');
  });
});
