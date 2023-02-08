describe('librimem', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=chaptercardcomponent--primary&args=chapter;')
  );
  it('should render the component', () => {
    cy.get('librimem-chapter-card').should('exist');
  });
});
