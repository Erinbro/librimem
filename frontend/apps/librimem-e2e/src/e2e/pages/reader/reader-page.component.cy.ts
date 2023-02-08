describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=readerpagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-reader-page').should('exist');
  });
});
