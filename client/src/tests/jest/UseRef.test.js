import { render, fireEvent, screen } from "@testing-library/react";
import UseRef from "../../react/Hooks/UseRef";

test("set input value", () => {
  render(<UseRef />);

  const counter = screen.getByTestId("renderCount");
  const input = screen.getByTestId("input");

  fireEvent.change(input, { target: { value: "a" } });

  expect(counter).toHaveTextContent("1");
});

test("set input value twice", () => {
  render(<UseRef />);

  const counter = screen.getByTestId("renderCount");
  const input = screen.getByTestId("input");

  fireEvent.change(input, { target: { value: "a" } });
  fireEvent.change(input, { target: { value: "ab" } });

  expect(counter).toHaveTextContent("2");
});
