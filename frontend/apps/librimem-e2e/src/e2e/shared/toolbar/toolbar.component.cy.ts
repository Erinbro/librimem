describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=toolbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-toolbar').should('exist');
  });
});
