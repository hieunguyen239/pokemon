import { homePg } from "../support/page-objects/homePg";

describe("POKEMON - Regression test", () => {
  it("Load Home page", () => {
    cy.visit("/");
    homePg.pageEl.should("be.visible");
    homePg.searchTbx.should("be.visible");
    homePg.searchBtn.should("be.visible");
  });
});
