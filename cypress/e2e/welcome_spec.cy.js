describe("Welcome Page User Flow", () => {
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
    cy.visit("http://localhost:3000/");
    cy.get(".user-button").eq(2).click();
    cy.get(".enter-button").click();
  });

  it("Should see Dirtr title", () => {
    cy.get(".title").should("contain", "Dirt");
    cy.get(".title-r").should("contain", "r");
  });

  it("Should see personalized welcome message to user", () => {
    cy.get(".welcome-user").should("contain", "Welcome, Shawn Lee");
  });

  it("Should see favorites button, about button and sign out button", () => {
    cy.get(".saved-page-button").should("contain", "Favorites");
    cy.get(".sign-out").should("contain", "Sign Out");
    cy.get(".about-button").should("contain", "About");
  });

  it("Should see welcome message", () => {
    cy.get(".welcome-message").should(
      "contain",
      "FIND YOUR PERFECT OFF-ROAD TRAIL"
    );
  });

  it("Should see a button to find trails", () => {
    cy.get(".button-welcome").should("contain", "FIND YOUR TRAIL ▶︎");
  });

  it("Should be able to navigate to favorites page and back", () => {
    cy.get(".saved-page-button").click();
    cy.url().should("eq", "http://localhost:3000/saved_trails");
    cy.get(".title").click();
    cy.url().should("eq", "http://localhost:3000/home");
  });

  it("Should be able to navigate to about page and back", () => {
    cy.get(".about-button").click();
    cy.url().should("eq", "http://localhost:3000/about");
    cy.get(".title").click();
    cy.url().should("eq", "http://localhost:3000/home");
  });

  it("Should be able to navigate to all trails page and back", () => {
    cy.get(".button-welcome").click();
    cy.url().should("eq", "http://localhost:3000/trails");
    cy.get(".title").click();
    cy.url().should("eq", "http://localhost:3000/home");
  });
});
