import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FancyShadcnButton from ".";

describe("<FancyShadcnButton/>", () => {
  test("render", () => {
    render(<FancyShadcnButton />);
    const button = screen.getByRole("button", {
      name: "shadcn/ui",
    });
    expect(button).toBeInTheDocument();
  });
});
