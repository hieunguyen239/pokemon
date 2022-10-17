/// <reference types="cypress" />

export class BasePage {
  initIntercept() {
    cy.intercept("/api/v2/pokemon").as("pokemon");
    cy.intercept("/api/v2/pokemon/*").as("pokemon-details");
  }
}
