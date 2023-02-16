describe('About Us Page User Flow', () => {
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
    cy.get('.about-button').click()
  })

  it('Should see About Us title', () => {
    cy.get('.about-us').should('contain', 'About Us')
  })

  it('Should see mission statement', () => {
    cy.get('.bio-text').should('contain', 'At Dirtr, our mission is to deliver a')
  })

  it('Should see an off-roading car gif', () => {
    cy.get('.image-container').should('have.descendants', 'img')
  })

  it('Should see a list of teams', () => {
    cy.get('.team-container').should('contain', 'Our team')
    cy.get('.team-container').within(() => {
      cy.get('a').eq(0).should('contain', 'Dana Truong')
      cy.get('a').eq(1).should('contain', 'Evan Swanson')
      cy.get('a').eq(2).should('contain', 'Dmitrii Gubko')
      cy.get('a').eq(3).should('contain', 'Kenz Leng')
      cy.get('a').eq(4).should('contain', 'Eli Fuchsman')
      cy.get('a').eq(5).should('contain', 'Shawn Lee')
      cy.get('a').eq(6).should('contain', 'Alex Mora')
    })
  })
})