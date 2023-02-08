describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=errordialogcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-error-dialog').should('exist');
  });
});
