/// <reference types="cypress" />
const cdata=require("../fixtures/Config.json")

describe ("IPO for Bipin", function(){

    beforeEach(function() {
        // Pre-conditions
        cy.Data()
        cy.Login(cdata.Capital,cdata.UserName1,cdata.Password1)
    })
    it.only("IPO1", function(){
        cy.Enter_data(cdata.Bnk1,cdata.Casba1,cdata.Pin)
    })

})


////npx cypress run --spec "cypress/e2e/IPO1.cy.js"
