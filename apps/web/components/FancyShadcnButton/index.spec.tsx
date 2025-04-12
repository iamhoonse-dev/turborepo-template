import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FancyShadcnButton from ".";

describe("<FancyShadcnButton/>", () => {
  test("render", async () => {
    render(<FancyShadcnButton />);
    const button = await screen.getByRole("button", {
      name: "shadcn/ui",
    });
    expect(button).toBeInTheDocument();
  });
});
