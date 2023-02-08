describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chapterspagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-chapters-page').should('exist');
  });
});
