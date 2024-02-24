import { render, screen } from "@testing-library/react";
import App from "../../App";

test('renders the "UseUffect" message', () => {
  render(<App />);
  const useEffectText = screen.getByText("UseEffect");
  expect(useEffectText).toBeInTheDocument();
});

test('renders the "UseRef" message', () => {
  render(<App />);
  const useRefText = screen.getByText("UseRef");
  expect(useRefText).toBeInTheDocument();
});
