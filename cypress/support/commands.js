// ***********************************************
// This example commands.js shows you how to
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

Cypress.Commands.add("Data", function(){ 
    cy.fixture('Config').then(function(data){
            this.data=data
    })
})

Cypress.Commands.add("Login1", function(){
    
    cy.visit(this.data.Url)
    cy.get(".select2-selection__rendered").type("11200")
    cy.get(".select2-results__option.select2-results__option--highlighted").click()

    cy.get("#username").type(this.data.UserName1)
    cy.get("#password").type(this.data.Password2)
    cy.get(".btn.sign-in").click()

    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')  //to keep the session alive and prevent logout for each it block
})

Cypress.Commands.add("Login2", function(){
    
    cy.visit(this.data.Url)
    cy.get(".select2-selection__rendered").type("11200")
    cy.get(".select2-results__option.select2-results__option--highlighted").click()
    
    cy.get("#username").type(this.data.UserName2)
    cy.get("#password").type(this.data.Password2)
    cy.get(".btn.sign-in").click()

    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')  //to keep the session alive and prevent logout for each it block
})

Cypress.Commands.add("Login3", function(){
    
    cy.visit(this.data.Url)
    cy.get(".select2-selection__rendered").type("11200")
    cy.get(".select2-results__option.select2-results__option--highlighted").click()
    
    cy.get("#username").type(this.data.UserName3)
    cy.get("#password").type(this.data.Password3)
    cy.get(".btn.sign-in").click()

    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')  //to keep the session alive and prevent logout for each it block
})

Cypress.Commands.add("Login", function(Capital,User,Pass){
    
    cy.visit(this.data.Url)
    cy.get(".select2-selection__rendered").type(Capital)
    cy.get(".select2-results__option.select2-results__option--highlighted").click()
    
    cy.get("#username").type(User)
    cy.get("#password").type(Pass)
    cy.get(".btn.sign-in").click()

    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')  //to keep the session alive and prevent logout for each it block
})