/// <reference types="cypress" />
const cdata=require("../fixtures/Config.json")

describe ("LogPoint_Playbook", function(){


    it("playbbok", function(){
        cy.visit("https://10.45.10.177")
        cy.pause()
        //cy.visit("https://10.45.10.177/soar/automation/playbooks#/")
        //cy.pause()
        for (let i = 0; i < 300; i++) {
            cy.get("body.sidebar-fixed.sidebar-lg-show:nth-child(2) div.integration-wrapper div.app div.BaseLayout__AppBody-b1ihzd-0.dMAXVl.app-body-main-container.app-body main.main:nth-child(2) div.playbooks-management-background div.ant-spin-nested-loading div.ant-spin-container div.playbooks-management-main-container div.ant-tabs.ant-tabs-top.playbooks-tabs-container div.ant-tabs-content-holder div.ant-tabs-content.ant-tabs-content-top div.ant-tabs-tabpane.ant-tabs-tabpane-active:nth-child(1) div.css-1ndrsdj.playbooks-table-and-tree-main-container div.playbooks-table-background:nth-child(3) div.playbooks-table-with-filters-container div.playbooks-management-container div.ant-table-wrapper.playbooks-main-table div.ant-spin-nested-loading div.ant-spin-container div.ant-table div.ant-table-container div.ant-table-content tbody.ant-table-tbody:nth-child(3) tr.ant-table-row.ant-table-row-level-0:nth-child(1) td.ant-table-cell:nth-child(5) span.playbooks-table-clickable-cell.playbook-run-icon span.anticon.anticon-play-circle > svg:nth-child(1)").click()
            cy.wait(1500)
            cy.get('.ant-modal-footer > .ant-btn').click()
            cy.pause()

            cy.get('[data-row-key="1"] > :nth-child(5) > .playbooks-table-clickable-cell').click()
            cy.wait(1500)
            cy.get('.ant-modal-footer > .ant-btn').click()
            cy.get('[data-row-key="2"] > :nth-child(5) > .playbooks-table-clickable-cell').click()
            cy.wait(1500)
            cy.get('.ant-modal-footer > .ant-btn').click()
            cy.get('[data-row-key="3"] > :nth-child(5) > .playbooks-table-clickable-cell').click()
            cy.wait(1500)
            cy.get('.ant-cy.wait(1500)modal-footer > .ant-btn').click()
        }



    })

})
