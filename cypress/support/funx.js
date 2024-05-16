/// <reference types="cypress" />

let lowPrice = 99
let Highprice = 300

Cypress.Commands.add("Enter_data", function(Ban,crn,pin){

        cy.get(":nth-child(8) > .nav-link").click() //my asba
       
        //cy.debug()
        cy.get(".company-list").each(($el,index,$list)=>{       //itetrate all the available buttons
          
            if($el.text().includes("Ordinary Shares"))
            {
                cy.get(".btn-issue").eq(index).click()
            }
        })    

        //cy.pause()
        cy.get(":nth-child(5) > .form-group > .form-value > span").invoke('text').then((text) => {
            // Parse the text as a number and store it in a variable
            const cost = parseInt(text, 10);
      
            // Now you can use the "numberValue" variable in your assertions or other actions
            cy.log('cost of share per kitta:', cost);

            expect(cost).to.lessThan(Highprice);
            expect(cost).to.greaterThan(lowPrice);
          });

        //cy.log(Ban)
        cy.get('#selectBank').select(Ban)
        cy.get("#appliedKitta").type(10)    //kitta
        cy.get("#crnNumber").type(crn)
        cy.get('#disclaimer').click()
        //cy.pause()
        cy.get('.card-footer > .btn-primary > span').contains("Proceed").click()
        cy.get('#transactionPIN').type(pin)
        cy.get('.confirm-page-btn > .btn-primary').click()
        cy.wait(25000)
})
