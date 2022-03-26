// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        clickAnyButton(value: string): Chainable<Element>,
        closeCookiPopUp(): Chainable<Element>,
    }
}
