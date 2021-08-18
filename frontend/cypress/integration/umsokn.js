describe('Visiting the application page', () => {
  it('unauthenticated', () => {
    cy.visit('/umsokn')
    cy.url().should('match', /login/)
  })

  it('subpage, unauthenticated', () => {
    cy.visit('/umsokn/asdf')
    cy.url().should('match', /login/)
  })

  it('authenticated', () => {
    cy.window().then((win) => {
      win.sessionStorage.setItem(
        'user',
        JSON.stringify({
          token: 'xxxxxx',
          user: '0910815209',
        }),
      )

      cy.visit('/umsokn')
      cy.url().should('match', /umsokn/)
    })
  })
})
