describe("Coulette", () => {
  before(() => {
    localStorage.clear();
  });

  it("should have correct title", () => {
    cy.visit("/");
    cy.get("h1").contains("Coulette");
  });
});
