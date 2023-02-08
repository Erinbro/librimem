describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=notepagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-note-page').should('exist');
  });
});
