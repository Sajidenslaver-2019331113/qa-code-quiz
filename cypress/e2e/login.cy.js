describe('Login Portal Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081'); 
  });

  it('should display the login form', () => {
    // To verify that the login form and its elements are visible
    cy.get('form').should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').contains('LOGIN').should('be.visible');
  });

  it('should login successfully with valid credentials', () => {
    // Enter valid credentials and submit
    cy.get('input[name="username"]').type('Sajid_Hossain');
    cy.get('input[name="password"]').type('TopSecret1234!');
    cy.get('button[type="submit"]').click();
    // To verify that the Account component is displayed
    cy.contains('Name: Sajid_Hossain').should('be.visible');
    cy.contains('Favourite Fruit: mango').should('be.visible');
    cy.contains('Favourite Movie: The Room').should('be.visible');
    cy.contains('Favourite Number: BN<1234>').should('be.visible');
    cy.get('button').contains('LOGOUT').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    // Enter invalid credentials and submit
    cy.get('input[name="username"]').type('invalidUser');
    cy.get('input[name="password"]').type('invalidPass');
    cy.get('button[type="submit"]').click();
    // To verify that the login form remains and an error is displayed
    cy.get('input[name="username"]').should('be.visible');
    cy.contains('INVALID USER').should('be.visible');
  });

  it('should handle empty username', () => {
    // Submit with empty username
    cy.get('input[name="password"]').type('TopSecret1234!');
    cy.get('button[type="submit"]').click();
    // To verify that the login form remains
    cy.get('input[name="username"]').should('be.visible');
  });

  it('should handle empty password', () => {
    // Submit with empty password
    cy.get('input[name="username"]').type('Sajid_Hossain');
    cy.get('button[type="submit"]').click();
    // To verify that the login form remains
    cy.get('input[name="username"]').should('be.visible');
  });

  it('should logout successfully', () => {
    // Login first
    cy.get('input[name="username"]').type('Sajid_Hossain');
    cy.get('input[name="password"]').type('TopSecret1234!');
    cy.get('button[type="submit"]').click();
    // To verify Account component
    cy.contains('Name: Sajid_Hossain').should('be.visible');
    // Click logout
    cy.get('button').contains('LOGOUT').click();
    // To verify that the login form is displayed again
    cy.get('input[name="username"]').should('be.visible');
  });
});
