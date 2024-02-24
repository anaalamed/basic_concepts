import React from 'react'
import UseRef from "../../src/react/Hooks/UseRef"

describe('<CountRendering />', () => {
  it('renders', () => {
    cy.mount(<UseRef />)
  })

  it('initial state', () => {
    cy.mount(<UseRef />)
    cy.get('[data-testid=renderCount]').should('have.text', '0')
  })

  it("changing input + fires a change event", () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<UseRef onChange={onChangeSpy} />);

    cy.get('[data-testid=input]').type("a")

    cy.get("[data-testid=renderCount]").should("have.text", "1");
  });

  it("changing input twice + fires a change event", () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<UseRef onChange={onChangeSpy} />);

    cy.get('[data-testid=input]').type("a")
    cy.get('[data-testid=input]').type("a")

    cy.get("[data-testid=renderCount]").should("have.text", "2");
  });
})