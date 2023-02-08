describe('librimem', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=bookcardcomponent--primary&args=book;')
  );
  it('should render the component', () => {
    cy.get('librimem-book-card').should('exist');
  });
});
