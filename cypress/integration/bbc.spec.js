/// <reference types="cypress" />

describe("bbc website", () => {
  beforeEach(() => {
    cy.visit("https://www.bbc.com/");
  });

  it("changes weather location to Fortaleza", () => {
    const location = "Fortaleza";

    cy.get("a.weather--edit").click();
    cy.get(".weather--form--input").type(`${location}{enter}`, {
      force: true,
    });
    cy.get(".weather--results > :nth-child(1) > a").click();
    cy.get(".weather--location").should("contains.text", location);
  });

  it("changes language to Brazilian Portuguese", () => {
    cy.get(".ws-language--pt-BR").click();
    cy.get(":nth-child(2) > .bbc-19cachr").should("contains.text", "Brasil");
  });

  it("searches for news about Brazil", () => {
    const search = "Brazil";
    cy.visit("https://www.bbc.com/sport/football/world-cup/table");

    cy.get("#downshift-0-input").type(search);
    cy.get("#downshift-0-item-0").click();

    cy.get(".gs-o-table__row--highlighted").should("contains.text", "Brazil");
  });
});
