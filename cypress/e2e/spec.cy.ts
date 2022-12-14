describe('Landing Page', () => {
  it('Sanity Test', () => {
    cy.visit('/');
    cy.contains('#header .text-3xl', 'Clipz');
  });
});
