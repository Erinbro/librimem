describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chapterslistcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-chapters-list').should('exist');
  });
});
