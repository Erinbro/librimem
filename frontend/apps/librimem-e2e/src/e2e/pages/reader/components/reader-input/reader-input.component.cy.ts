describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=readerinputcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-reader-input').should('exist');
  });
});
