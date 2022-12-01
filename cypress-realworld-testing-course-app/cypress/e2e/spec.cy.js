// describe('Login to Core', () => {
//   it('passes', () => {
//     // cy.visit('http://10.100.36.107')
//     // cy.get('#email').type('admin@scaleaq.com')
//     // cy.get('#password').type('admin')
//     // cy.wait(1000)
//     // cy.get('.btn').click()
//   })
// })

import { get } from "lodash"



// describe('Login false to Core', function() {
//   it('passes', function() {
//     cy.LoginFalse()
//   })
// })
// describe('Login to Core', function() {
//   it('passes', function() {
//     cy.Login()
//   })
// })
describe('Login', () => {
  it('Login pass', () => {
    cy.fixture('login').then((login) => {
      const url = login.url
      const username1 = login.username1
      const password1 = login.password1
      const btnlogin1 = login.btnlogin1
      login.datapass.forEach((data1) => {
        cy.log('Login pass=' + data1.username + '; password =' + data1.password)
        cy.visit(url)
        cy.get(username1).clear().type(data1.username)
        cy.get(password1).clear().type(data1.password)
        cy.get(btnlogin1).click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .card > .card-body > .btn').click()
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('a').contains('Sign out', { matchCase: false }).click()
        cy.wait(2000)

      });
      login.datafail.forEach((datafail) => {
        cy.log('Login fail = ' + datafail.username + '; password = ' + datafail.password)
        cy.visit(url)
        cy.get(username1).clear().type(datafail.username)
        cy.get(password1).clear().type(datafail.password)
        cy.get(btnlogin1).click()
        cy.wait(1000)

      })
    })
  })
})

// describe('Check View', ()=> {
//   it('passes',()=>{ 

//     cy.get(':nth-child(1) > .card > .card-body > .btn').click()
//     cy.get('.ml-0').click()
//     //cy.get('[style="padding-left: 3.215rem;"] > :nth-child(1)').click()
//     cy.get(':nth-child(1) > :nth-child(1) > .btn-group > [aria-expanded="false"] > .setting-icon').click()
//     cy.get('a').contains('Remove').click()

//   })
//   })
// describe('Check View', function () {
//   it('Pass', function () {
//     cy.Login()
//     cy.CheckView()
//     cy.wait(3000)
//   })
// })

describe('Check View', () => {
  beforeEach(()=>{
    cy.Login()
    cy.CheckView()
  })
  it('Pass login', () => {
    cy.wait(3000)
  })
  it('Pass add view',()=>{
      cy.get('.btn.mr-1').click()
      cy.get('.form-horizontal > :nth-child(1) > :nth-child(1) > form-element > .ng-star-inserted').click()
      cy.get('div[name="name"]').within(() => {
        cy.get('input').type('View1')
      })
      cy.get('span[title="tank"]').click()
      cy.get('ul[class="show-select"]').within(() => {
        cy.get('li').contains('Head').click()
      })    
      // cy.get('#ctn_add_view .btn.btn-primary').click()
      // cy.get('div[id="ctn_add_view"]').within(()=>{
       cy.get('button[class="btn btn-primary"]').contains('Save').click()
      // })
      cy.wait(1000)
    })
    it('Delete View (No)',()=>{
      cy.get(':nth-child(7) > :nth-child(1) > .btn-group > [aria-expanded="false"] > .setting-icon').click()
      cy.get(':nth-child(7) > :nth-child(1) > .btn-group > .dropdown-menu > :nth-child(2)').click()
      cy.wait(2000)
      cy.get('#confirm-dialog-no').click()
      cy.wait(2000)

    })
     it('Edit View',()=>{
      cy.get(':nth-child(7) > :nth-child(1) > .btn-group > [aria-expanded="false"] > .setting-icon').click()
      cy.get(':nth-child(7) > :nth-child(1) > .btn-group > .dropdown-menu > :nth-child(1)').click()
      cy.get('div[name="name"]').within(() => {
        cy.get('input').clear().type('View 2')
        cy.wait(1000)
      })
      cy.get('div[class="form-group row ng-star-inserted"]').within(()=>{
        cy.get('form-element[type="select"]').click()
        cy.get('li').contains('Tank').click()  
        cy.get('form-element[type="checkbox"]').click()
        cy.wait(2000)
      })
      cy.get('button[class="btn btn-primary"]').contains('Save').click()
     })
     it('Delete View (Yes)',()=>{
      cy.get(':nth-child(7) > :nth-child(1) > .btn-group > [aria-expanded="false"] > .setting-icon').click()
      cy.get(':nth-child(7) > :nth-child(1) > .btn-group > .dropdown-menu > :nth-child(2)').click()
      cy.wait(2000)
      cy.get('#confirm-dialog-yes').click()
      cy.wait(2000)

    })
  })

   
  
