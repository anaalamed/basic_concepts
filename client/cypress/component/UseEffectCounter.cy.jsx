import React from 'react'
import UseEffect from "../../src/react/Hooks/UseEffect"

describe('<Counter />', () => {
  it('renders', () => {
    cy.mount(<UseEffect />)
  })

  it('initial state', () => {
    it('renders', () => {
      cy.mount(<UseEffect />)
      cy.get('[data-testid=counter]').should('have.text', '0')
    })
  })

  it("changing input + fires a change event", () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<UseEffect onChange={onChangeSpy} />);

    cy.get('[data-testid=increment]').click();

    cy.get("[data-testid=counter]").should("have.text", "1");
  });
})