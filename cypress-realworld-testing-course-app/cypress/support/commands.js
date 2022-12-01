/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('Login', ()=> {
 
        cy.visit('http://10.100.36.131')
        cy.get('#email').type('admin@scaleaq.com')
        cy.get('#password').type('admin')
        cy.wait(1000)
        cy.get('.btn').click()
 })
 Cypress.Commands.add('LoginFalse', ()=> {
 
    cy.visit('http://10.100.36.131')
    cy.get('#email').type('admin@scalea.com')
    cy.get('#password').type('admin')
    cy.wait(1000)
    cy.get('.btn').click()
})
Cypress.Commands.add('CheckView', ()=> {
 
    cy.get(':nth-child(1) > .card > .card-body > .btn').click()
   // cy.get(':nth-child(2) > .location > .row').click()
    cy.get('div[title="Site 1"]').click()
    //cy.get('[style="padding-left: 3.215rem;"] > :nth-child(1)').click()
    //cy.get(':nth-child(1) > :nth-child(1) > .btn-group > [aria-expanded="false"] > .setting-icon').click()
    //cy.get('a').contains('Remove').click()
})


