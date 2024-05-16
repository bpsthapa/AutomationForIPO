/// <reference types="cypress" />
const cdata=require("../fixtures/Config.json")

describe ("IPO for Mom", function(){

    beforeEach(function() {
        // Pre-conditions
        cy.Data()
        cy.Login(cdata.Capital,cdata.UserName3,cdata.Password3)
    })

    it.only("IPO1", function(){
        cy.Enter_data(cdata.Bnk3,cdata.Casba3,cdata.Pin)
    })

})
