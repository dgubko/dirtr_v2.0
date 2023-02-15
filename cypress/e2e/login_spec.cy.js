describe('Login Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })

  it('Should see Dirtr title', () => {
    cy.get('.static-title').should('contain', 'Dirt')
    cy.get('.static-title-r').should('contain', 'r')
  })

  it('Should see choose-message', () => {
    cy.get('.login-message').should('contain', 'Choose an account:')
  })

  it('Should see user buttons', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').should('have.length', 7)
    })
  })

  it('Should show the Kenz Leng button', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(0).should('contain', 'Kenz Leng')
    })
  })

  it('Should show the Eli Fuchsman button', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(1).should('contain', 'Eli Fuchsman')
    })
  })

  it('Should show the Shawn Lee button', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(2).should('contain', 'Shawn Lee')
    })
  })

  it('Should show the Alex Mora button', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(3).should('contain', 'Alex Mora')
    })
  })

  it('Should show the Evan Swanson button', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(4).should('contain', 'Evan Swanson')
    })
  })

  it('Should show the Dana Truong button', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(5).should('contain', 'Dana Truong')
    })
  })

  it('Should show the Dmitrii Gubko button', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(6).should('contain', 'Dmitrii Gubko')
    })
  })

  it('Should click on a user and sign them in', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(5).click()
    })
    cy.get('.enter-button').should('contain', 'Log In')
    cy.get('.welcome-user').should('contain', 'Welcome, Dana Truong')
    cy.get('.saved-page-button').should('contain', 'Favorites')
    cy.get('.sign-out').should('contain', 'Sign Out')
  })

  it('Should sign out and allow for a different user to sign in', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(5).click()
    })
    cy.get('.sign-out').click()
    cy.get('.welcome-user').should('not.exist')
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(1).click()
    })
    cy.get('.welcome-user').should('contain', 'Welcome, Eli Fuchsman')
  })

  it('Should send user to Favorites page', () => {
    cy.get('.account-button-container').within(() => {
      cy.get('.user-button').eq(5).click()
    })
    cy.get('.saved-page-button').click()
    cy.url().should('include', 'saved_trails')
  })
})