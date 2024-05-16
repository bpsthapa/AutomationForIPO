/// <reference types="cypress" />
const cdata=require("../fixtures/Config.json")

describe ("IPO for Bigyan", function(){

    beforeEach(function() {
        // Pre-conditions
        cy.Data()
        cy.Login(cdata.Capital4,cdata.UserName4,cdata.Password4)
    })

    it.only("IPO1", function(){
        cy.Enter_data(cdata.Bnk4,cdata.Casba4,cdata.Pin4)
    })

})
