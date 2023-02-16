describe("savedTrails", () => {
  beforeEach(() => {
    cy.intercept("https://murmuring-cliffs-65490.herokuapp.com/api/v1/trails", {
      method: "GET",
      fixture: "../fixtures/alltrails.json",
    });
    cy.intercept(
      "https://murmuring-cliffs-65490.herokuapp.com/api/v1/user?id=3"
    );
    cy.intercept(
      "https://murmuring-cliffs-65490.herokuapp.com/api/v1/counties"
    );
    cy.intercept("https://murmuring-cliffs-65490.herokuapp.com/api/v1/users");
    cy.intercept(
      "POST",
      "https://murmuring-cliffs-65490.herokuapp.com/api/v1/user-trails"
    );
    cy.intercept(
      "DELETE",
      "https://murmuring-cliffs-65490.herokuapp.com/api/v1/user-trails"
    );
    cy.visit("http://localhost:3000");
    cy.get(".user-button").eq(2).click();
    cy.get(".enter-button").click();
    cy.get(".button-welcome").click();
    cy.get(".favorite-button").eq(0).click();
    cy.get(".saved-page-button").click();
  });

  it("Should see Saved trails heading", () => {
    cy.get("h2").should("contain", "Saved Trails:");
  });

  it("should contain all trails container", () => {
    cy.get(".saved-trails-card-container").should("be.visible");
  });

  it("should display 1 cards", () => {
    cy.get(".card").should("have.length", 0);
    cy.get(".card").eq(0).should("contain", "Cowboy Lake");
  });

  it("should remove cards", () => {
    cy.get(".card").should("have.length", 1);
    cy.get(".delete-button").eq(0).click();
    cy.get(".card").should("have.length", 0);
  });
});
