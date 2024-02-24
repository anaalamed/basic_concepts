import { render, fireEvent, screen } from "@testing-library/react";
import UseEffect from "../../react/Hooks/UseEffect";

test("increments counter and calculate", () => {
  render(<UseEffect />);

  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");
  const calculation = screen.getByTestId("calculation");

  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("1");
  expect(calculation).toHaveTextContent("2");
});
