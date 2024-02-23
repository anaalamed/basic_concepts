import { render, fireEvent, screen } from "@testing-library/react";
import { CountRendering } from "../../Hooks/UseRef";

test("set input value", () => {
  render(<CountRendering />);

  const counter = screen.getByTestId("renderCount");
  const input = screen.getByTestId("input");

  fireEvent.change(input, { target: { value: "a" } });

  expect(counter).toHaveTextContent("1");
});

test("set input value twice", () => {
  render(<CountRendering />);

  const counter = screen.getByTestId("renderCount");
  const input = screen.getByTestId("input");

  fireEvent.change(input, { target: { value: "a" } });
  fireEvent.change(input, { target: { value: "ab" } });

  expect(counter).toHaveTextContent("2");
});
