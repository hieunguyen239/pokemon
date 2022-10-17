import { homePg } from "../support/page-objects/homePg";

describe("POKEMON - Regression test", () => {
  it("Load Home page", () => {
    homePg.initIntercept();
    homePg.goToHomePage();
    homePg.pageEl.should("be.visible");
    homePg.pokemonCardEls.should("be.visible");
  });
});
