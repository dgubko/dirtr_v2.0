describe('Bad Url Page User Flow', () => {
  beforeEach(() => {
    cy.intercept(
      'https://murmuring-cliffs-65490.herokuapp.com/api/v1/trails',
      {
        method: 'GET',
        fixture: '../fixtures/alltrails.json',
      }
    )
    cy.intercept('https://murmuring-cliffs-65490.herokuapp.com/api/v1/user?id=3')
    cy.intercept('https://murmuring-cliffs-65490.herokuapp.com/api/v1/counties')
    cy.intercept('https://murmuring-cliffs-65490.herokuapp.com/api/v1/users')
    cy.visit('http://localhost:3000/')
    cy.get('.user-button').eq(2).click()
    cy.get('.enter-button').click()
  })

  it('Should encounter an error message when visiting a nonexistent url', () => {
    cy.visit('http://localhost:3000/potato')
    cy.url().should('eq', 'http://localhost:3001/potato')
    cy.get('.bad-url-msg').should('contain', 'Oops! You are too far off the grid.')
  })

  it('Should be able to navigate back to home after visiting a nonexistent url', () => {
    cy.visit('http://localhost:3000/potato')
    cy.get('.return-home-button').click()
    cy.url().should('eq', 'http://localhost:3000/home')
  })
})
