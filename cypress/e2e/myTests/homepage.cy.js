/// <reference types="cypress" />

const { verifyIfLogoIsVisible, clickOnContactLink, verifyTitle, clickOnWhatsNewLink, clickOnFooterLink, verifyFooter } = require("../../pageObjects/generalItems")
const { clickOnHomepageLink, clickOnSingleUiElementsLink, verifyTitleIsVisible, verifyFirstParagraphIsVisible, verifySecondParagraphIsVisible, verifyInputsLinkIsVisible, verifyButtonsLinkIsVisible, verifyCheckboxLinkIsVisible, verifySelectLinkIsVisible, verifyNewTabLinkIsVisible, verifyTextAreaLinkIsVisible, verifyAlertsLinkIsVisible, verifyDragAndDropLinkIsVisible, verifyIframesLinkIsVisible, verifyPopUpLinkIsVisible, clickOnButton1, clickOnButton2, clickOnButton3, clickOnButton4, clickOnButton5 } = require("../../pageObjects/homePage")

const firstParagraphText = "This site is designed to gain practical skills in testing. It can be useful for both people studying manual testing and automated testing. Here is a collection of various web elements and requirements for them. The number and complexity of elements will gradually increase.";
const secondParagraphTet = "Not sure where to start? Try testing these simple elements:";
const contactUsTitle = "Contact Us | QA Practice";
const whatsNewTitle = "What's New | QA Practice";
const homePageTitle = "Home Page | QA Practice";
const textInputPageTitle = "Input Field | Text Input | QA Practice";
const buttonPageTitle = "Buttons | Simple Button | QA Practice";
const checkboxPageTitle = "Checkboxes | Single Checkbox | QA Practice";
const textAreaPageTitle = "TextArea | Single TextArea | QA Practice";
const selectPageTitle = "Select Input | Single Select | QA Practice";

describe('Check homepage', () => {

    beforeEach(() => {
        cy.visit('https://www.qa-practice.com')
    })

    it('should be able to see Home page', () => {
        verifyIfLogoIsVisible();
        verifyTitleIsVisible('Hello!');
        verifyFirstParagraphIsVisible(firstParagraphText);
        verifySecondParagraphIsVisible(secondParagraphTet);
        clickOnHomepageLink();
        verifyTitle(homePageTitle);
    })

    it('should open and show Single UI Elements drop-down', () => {
        clickOnSingleUiElementsLink();
        verifyInputsLinkIsVisible();
        verifyButtonsLinkIsVisible();
        verifyCheckboxLinkIsVisible();
        verifySelectLinkIsVisible();
        verifyNewTabLinkIsVisible();
        verifyTextAreaLinkIsVisible();
        verifyAlertsLinkIsVisible();
        verifyDragAndDropLinkIsVisible();
        verifyIframesLinkIsVisible();
        verifyPopUpLinkIsVisible();
    })

    it('should open the Contact Us page', () => {
        clickOnContactLink();
        verifyTitle(contactUsTitle);
    })

    it('should open the What\'s new page', () => {
        clickOnWhatsNewLink();
        verifyTitle(whatsNewTitle);
    })

    it('should open the Home page from footer link', () => {
        clickOnFooterLink();
        verifyTitle(homePageTitle);
    })

    it('should have correct footer text', () => {
        verifyFooter();
    })

    it('should open Text input page from button 1', () => {
        clickOnButton1();
        verifyTitle(textInputPageTitle);
    })

    it('should open Simple button page from button 2', () => {
        clickOnButton2();
        verifyTitle(buttonPageTitle);
    })

    it('should open Single checkboox page from button 3', () => {
        clickOnButton3();
        verifyTitle(checkboxPageTitle);
    })

    it('should open Text area page from button 4', () => {
        clickOnButton4();
        verifyTitle(textAreaPageTitle);
    })

    it('should open Select input page from button 5', () => {
        clickOnButton5();
        verifyTitle(selectPageTitle);
    })
})