describe("Renders the home page", () => {
  it('Renders correctly', () => {
    cy.visit('/')
    cy.get('#main').should('exist')
  })
})