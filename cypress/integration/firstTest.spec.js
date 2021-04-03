/// <reference types="cypress" />

describe('First test suite', () => {
  it('Blog Page Test', () => {
    // cy.visit('http://localhost:3000/');
    cy.visit('/');
    // cy.pause();

    cy.contains('Welcome').click();
    cy.url().should('include', '/blog');

    cy.contains(' Beautiful Nothing ').click();

    // cy.contains('Launch').click();

    cy.get('#url')
      .type('https://www.lucky-student.com/')
      .should('have.value', 'https://www.lucky-student.com/');
    cy.get('#page').type('Lucky Student').should('have.value', 'Lucky Student');
    cy.contains('Add Site').click();
    // cy.get('#button').click();
  });

  it('Contact Form Test', () => {
    cy.visit('/blog');

    cy.contains('Contact').click();
    cy.url().should('include', '/contact');

    cy.get('[placeholder="Name"]')
      .type('Adolf Schmuck')
      .should('have.value', 'Adolf Schmuck');
    cy.get('[placeholder="email@example.com"]')
      .type('adolf.schmuck@gmail.com')
      .should('have.value', 'adolf.schmuck@gmail.com');
    cy.get('[name="message"]')
      .type('I want to tell you how much I really like this site.')
      .should(
        'have.value',
        'I want to tell you how much I really like this site.'
      );

    cy.contains('Send Message').click();
  });
});
