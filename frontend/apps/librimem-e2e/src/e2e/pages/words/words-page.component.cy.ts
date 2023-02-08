describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=wordspagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-words-page').should('exist');
  });
});
