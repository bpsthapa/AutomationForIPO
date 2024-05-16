/// <reference types="cypress" />
const cdata=require("../fixtures/Config.json")

describe ("IPO for Dad", function(){

    beforeEach(function() {
        // Pre-conditions
        cy.Data()
        cy.Login(cdata.Capital,cdata.UserName2,cdata.Password2)
    })

    it.only("IPO1", function(){
        cy.Enter_data(cdata.Bnk2,cdata.Casba2,cdata.Pin)
    })

})
