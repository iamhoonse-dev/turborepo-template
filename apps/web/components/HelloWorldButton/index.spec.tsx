import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HelloWorldButton from ".";

describe("<HelloWorldButton/>", () => {
  test("render", () => {
    render(<HelloWorldButton />);
    const button = screen.getByRole("button", {
      name: "Click me!",
    });
    expect(button).toBeInTheDocument();
  });
});
