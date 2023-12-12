describe("Text with with wrong planet name", () => {
  it("", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#searchPlanet").type("Marte");
    cy.contains("Search").click();

  });
});