const homepageLogo = ".logo_image";
const contactLink = "[href=\"/contact/\"]";
const whatsNewLink = "[href=\"/whats_new/\"]";
const footer = ".text-lg-start > .text-center";
const footerLink = ".text-center > a";
const dayjs = require('dayjs');
const currentYear = dayjs().format('YYYY');

export function verifyIfLogoIsVisible() {
    cy.get(homepageLogo)
        .should('be.visible');
}
export function clickOnContactLink() {
    cy.get(contactLink)
        .click();
}

export function clickOnWhatsNewLink() {
    cy.get(whatsNewLink)
        .click();
}

export function verifyFooterIsVisible(text) {
    cy.get(footer)
        .should('be.visible')
        .and('have.text', text);
}

export function clickOnFooterLink() {
    cy.get(footerLink)
        .click();
}

export function verifyTitle(title) {
    cy.title()
        .should('eq', title);
}

export function verifyFooter() {
    cy.get(footer)
        .contains(`© ${currentYear} Copyright:`);
}
