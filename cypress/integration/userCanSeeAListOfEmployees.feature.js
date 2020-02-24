describe('Display a list of employees', () => {
  it('with a header', () => {
    cy.visit('http://localhost:3000')
    cy.get('section[name="header"]').should('contain', 'Employee list')
  })

  it('with a list of 4 employees', () => {
    cy.get('section[name="main"]').within(() => {
      cy.get('div[role="listitem"]').should('have.length', 4)
    })
  });

});