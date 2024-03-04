const homepageLink = "[href=\"/\"]";
const singleUiElementsLink = "[href=\"javascript:;\"]";
const inputsLink = "[href=\"/elements/input\"]";
const buttonsLink = "[href=\"/elements/button\"]";
const checkboxLink = "[href=\"/elements/checkbox\"]";
const selectLink = "[href=\"/elements/select\"]";
const newTabLink = "[href=\"/elements/new_tab\"]";
const textAreaLink = "[href=\"/elements/textarea\"]";
const alertsLink = "[href=\"/elements/alert\"]";
const dragAndDropLink = "[href=\"/elements/dragndrop\"]";
const iframesLink = "[href=\"/elements/iframe/iframe_page\"]";
const popUpLink = "[href=\"/elements/popup\"]";
const title = "h1";
const firstParagraph = ".home > :nth-child(2)";
const secondParagraph = ".home > :nth-child(3)";
const button1 = "[href=\"/elements/input/simple\"]";
const button2 = "[href=\"/elements/button/simple\"]";
const button3 = "[href=\"/elements/checkbox/single_checkbox\"]";
const button4 = "[href=\"/elements/textarea/single\"]";
const button5 = "[href=\"/elements/select/single_select\"]";

export function clickOnHomepageLink() {
    cy.get(homepageLink)
        .click();
}

export function clickOnSingleUiElementsLink() {
    cy.get(singleUiElementsLink)
        .click();
}

export function clickOnInputsLink() {
    cy.get(inputsLink)
        .click();
}

export function clickOnButtonsLink() {
    cy.get(buttonsLink)
        .click();
}

export function clickOnCheckboxLink() {
    cy.get(checkboxLink)
        .click();
}

export function clickOnSelectLink() {
    cy.get(selectLink)
        .click();
}

export function clickOnNewTabLink() {
    cy.get(newTabLink)
        .click();
}

export function clickOnTextAreaLink() {
    cy.get(textAreaLink)
        .click();
}

export function clickOnAlertsLink() {
    cy.get(alertsLink)
        .click();
}

export function clickOnDragAndDropLink() {
    cy.get(dragAndDropLink)
        .click();
}

export function clickOnIframesLink() {
    cy.get(iframesLink)
        .click();
}

export function clickOnPopUpLink() {
    cy.get(popUpLink)
        .click();
}

export function verifyInputsLinkIsVisible() {
    cy.get(inputsLink)
        .should('be.visible');
}

export function verifyButtonsLinkIsVisible() {
    cy.get(buttonsLink)
        .should('be.visible');
}

export function verifyCheckboxLinkIsVisible() {
    cy.get(checkboxLink)
        .should('be.visible');
}

export function verifySelectLinkIsVisible() {
    cy.get(selectLink)
        .should('be.visible');
}

export function verifyNewTabLinkIsVisible() {
    cy.get(newTabLink)
        .should('be.visible');
}

export function verifyTextAreaLinkIsVisible() {
    cy.get(textAreaLink)
        .should('be.visible');
}

export function verifyAlertsLinkIsVisible() {
    cy.get(alertsLink)
        .should('be.visible');
}

export function verifyDragAndDropLinkIsVisible() {
    cy.get(dragAndDropLink)
        .should('be.visible');
}

export function verifyIframesLinkIsVisible() {
    cy.get(iframesLink)
        .should('be.visible');
}

export function verifyPopUpLinkIsVisible() {
    cy.get(popUpLink)
        .should('be.visible');
}

export function verifyTitleIsVisible(text) {
    cy.get(title)
        .should('be.visible')
        .and('have.text', text);
}

export function verifyFirstParagraphIsVisible(text) {
    cy.get(firstParagraph)
        .should('be.visible')
        .and('have.text', text);
}

export function verifySecondParagraphIsVisible(text) {
    cy.get(secondParagraph)
        .should('be.visible')
        .and('have.text', text);
}

export function clickOnButton1() {
    cy.get(button1)
        .click();
}

export function clickOnButton2() {
    cy.get(button2)
        .click();
}

export function clickOnButton3() {
    cy.get(button3)
        .click();
}

export function clickOnButton4() {
    cy.get(button4)
        .click();
}

export function clickOnButton5() {
    cy.get(button5)
        .click();
}
