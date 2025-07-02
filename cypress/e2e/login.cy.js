describe('Login Portal Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081'); 
  });

  it('should display the login form', () => { 
    cy.get('form').should('be.visible'); 
    cy.get('input[name="username"]').should('be.visible'); 
    cy.get('input[name="password"]').should('be.visible'); 
    cy.get('button[type="submit"]').contains('LOGIN').should('be.visible'); 
    cy.contains('If you do not have an account, contact an admin').should('be.visible'); 
  });
  
  it('Should show error for empty credentials', () => {
    cy.get('button[type=submit]').click();
    cy.contains('Username is required');
    cy.contains('Password is required');
  });

  it('Should login with correct credentials', () => {
    cy.get('input[name=username]').type('testuser');
    cy.get('input[name=password]').type('correctpassword');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });

  it('Should show error for wrong password', () => {
    cy.get('input[name=username]').type('testuser');
    cy.get('input[name=password]').type('wrongpassword');
    cy.get('button[type=submit]').click();
    cy.contains('Invalid username or password');
  });
});
