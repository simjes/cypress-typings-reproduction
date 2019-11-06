describe('Repro', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('A test', () => {
    cy.findAllByText('Actions').should('be.visible');
  });
});
