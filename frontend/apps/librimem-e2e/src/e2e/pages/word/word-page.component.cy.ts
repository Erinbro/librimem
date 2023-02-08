describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=wordpagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-word-page').should('exist');
  });
});
