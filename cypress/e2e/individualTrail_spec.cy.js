describe('Individual Trail Page User Flow', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/')
      cy.get('.account-button-container').within(() => {
        cy.get('.user-button').eq(5).click()
      })
      cy.get('.enter-button').click()
      cy.get('.button-welcome').click()
      cy.get('.card').eq(0).click()
    })
  
    it('Should see Dirtr title', () => {
      cy.get('.title').should('contain', 'Dirt')
      cy.get('.title-r').should('contain', 'r')
    })

    it('Should see trail name', () => {
        cy.get('.individual-trail-name').should('contain', 'Cowboy Lake')
    })


    it('Should see trail distance', () => {
        cy.get('.trail-distance').should('contain', 'Distance: 1.5 miles')
    })

    it('Should see trail duration', () => {
        cy.get('.trail-duration').should('contain', 'Duration: N/A')
    })

    it('Should see trail difficulty', () => {
        cy.get('.trail-difficulty').should('contain', 'Difficulty: green')
    })

    it('Should see trail elevation', () => {
        cy.get('.trail-elevation').should('contain', 'Elevation: 9,184 ft')
    })

    it('Should see trail image', () => {
        cy.get('.trail-image').should('exist')
    })

    it('Should see trail description', () => {
        cy.get('.trail-overview').should('contain', 'Cowboy Lake is a 1 mile less popular green doubletrack trail located near Ridgway Colorado. This atv/orv/ohv primary trail can be used both directions.')
    })

    it('Should be able to favorite trail', () => {
        cy.get('.favorite-button').click()
        cy.get('.saved-page-button').click()
        cy.get('.card').should('have.length', 1)
    })
  })