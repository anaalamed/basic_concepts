import React from 'react'
import { CountRendering } from '../../src/Hooks/UseRef'

describe('<CountRendering />', () => {
  it('renders', () => {
    cy.mount(<CountRendering />)
  })

  it('initial state', () => {
    cy.mount(<CountRendering />)
    cy.get('[data-testid=renderCount]').should('have.text', '0')
  })

  it("changing input + fires a change event", () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<CountRendering onChange={onChangeSpy} />);

    cy.get('[data-testid=input]').type("a")

    cy.get("[data-testid=renderCount]").should("have.text", "1");
  });

  it("changing input twice + fires a change event", () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<CountRendering onChange={onChangeSpy} />);

    cy.get('[data-testid=input]').type("a")
    cy.get('[data-testid=input]').type("a")

    cy.get("[data-testid=renderCount]").should("have.text", "2");
  });
})