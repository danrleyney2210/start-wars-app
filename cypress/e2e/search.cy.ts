describe("Search with correct planet name", () => {
  it("", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#searchPlanet").type("Alderaan");
    cy.contains("Search").click();
  });
});
