describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chapterpagecomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-chapter-page').should('exist');
  });
});
