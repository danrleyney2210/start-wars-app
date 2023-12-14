describe("Type select by name or population", () => {
  it("", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Name").click();
    cy.contains("Population").click();
  });
});
