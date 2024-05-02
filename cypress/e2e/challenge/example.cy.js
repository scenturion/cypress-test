describe('first login', () => {
    beforeEach(() => {
        cy.visit('/auth/login')
    })



    it('happy path - login', () => {

        cy.get('[placeholder="Username"]').type(Cypress.env('userName'))
        cy.get('[placeholder="Password"]').type(Cypress.env('password'))
        cy.get('.oxd-button').click()

        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain', 'Dashboard')
    })
})