import React from 'react'
import { Counter } from '../../src/Hooks/UseEffect'

describe('<Counter />', () => {
  it('renders', () => {
    cy.mount(<Counter />)
  })

  it('initial state', () => {
    it('renders', () => {
      cy.mount(<Counter />)
      cy.get('[data-testid=counter]').should('have.text', '0')
    })
  })

  it("changing input + fires a change event", () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<Counter onChange={onChangeSpy} />);

    cy.get('[data-testid=increment]').click();

    cy.get("[data-testid=counter]").should("have.text", "1");
  });
})