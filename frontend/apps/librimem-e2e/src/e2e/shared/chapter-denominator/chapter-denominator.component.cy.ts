describe('librimem', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=chapterdenominatorcomponent--primary')
  );
  it('should render the component', () => {
    cy.get('librimem-chapter-denominator').should('exist');
  });
});
