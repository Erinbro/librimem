describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=infodialogcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-info-dialog').should('exist');
  });
});
