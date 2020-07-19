import cy from 'cypress';

/// <reference types="cypress" />

describe('First test suite', () => {
  it('First Test', () => {
    cy.visit('/');
    cy.contains('Welcome');

    cy.get('#welcome');
  });
});
