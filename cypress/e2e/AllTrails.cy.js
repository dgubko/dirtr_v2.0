describe("AllTrails", () => {
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
    cy.visit("http://localhost:3001");
    cy.get(".user-button").eq(1).click();
    cy.get(".enter-button").click();
    cy.get(".button-welcome").click();
  });

  it("Should see Trails heading", () => {
    cy.get("h1").should("contain", "Trails");
  });

  it("Should contain form with 3 inputs", () => {
    cy.get("form").should("be.visible");
    cy.get(".name-field").should("be.visible");
    cy.get(".difficulty-field").should("be.visible");
    cy.get(".county-field").should("be.visible");
  });

  it("should search by name", () => {
    cy.get(".card").should("have.length", 3);
    cy.get(".name-field").type("Cowboy").invoke("val").should("eq", "Cowboy");
    cy.get(".card").should("have.length", 1).should("contain", "Cowboy");
  });

  it("should search by difficulty", () => {
    cy.get(".card").should("have.length", 3);
    cy.get(".difficulty-field").select(1).invoke("val").should("eq", "green");
    cy.get(".card").should("have.length", 1).should("contain", "Cowboy");
  });

  it("should search by county", () => {
    cy.get(".card").should("have.length", 3);
    cy.get(".county-field").select(1).invoke("val");
    cy.get(".card").should("have.length", 3).should("have.length", 3);
  });

  it("should contain all trails container", () => {
    cy.get(".all-card-container").should("be.visible");
  });

  it("should display 3 cards", () => {
    cy.get(".card").should("have.length", 3);
    cy.get(".card")
      .eq(0)
      .should("contain", "Cowboy Lake")
      .should("contain", "Ouray County")
      .should("contain", "green")
      .should("contain", "1.5 miles");
  });

  it("should add to favorite", () => {
    cy.get(".saved-page-button").click();
    cy.get(".card").should("not.exist");
    cy.get("h2").should("contain", "No trails saved. Go favorite some!");
    cy.get(".title").click();
    cy.get(".button-welcome").click();
    cy.get(".favorite-button").eq(0).click();
    cy.get(".saved-page-button").click();
    cy.get(".card")
      .eq(0)
      .should("contain", "Cowboy Lake")
      .should("contain", "Ouray County")
      .should("contain", "green")
      .should("contain", "1.5 miles");
  });
});
