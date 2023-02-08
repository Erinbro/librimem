describe('librimem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chapterdialogcomponent--primary'));
  it('should render the component', () => {
    cy.get('librimem-chapter-dialog').should('exist');
  });
});
