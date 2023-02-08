describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=summariespagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-summaries-page').should('exist');
  });
});
