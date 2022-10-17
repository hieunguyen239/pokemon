import locators from "../locators";
import { BasePage } from "./basePg";

class HomePage extends BasePage {
  get pageEl() {
    return cy.get(locators.homePg.pageEl);
  }

  get searchTbx() {
    return cy.get(locators.homePg.searchTbx);
  }

  get searchBtn() {
    return cy.get(locators.homePg.searchBtn);
  }

  get pokemonCardEls() {
    return cy.get(locators.homePg.pokemonCardEls);
  }

  goToHomePage() {
    cy.visit("");
  }
}

export const homePg = new HomePage();
