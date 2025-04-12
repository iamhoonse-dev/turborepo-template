import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HelloWorldButton from ".";

describe("<HelloWorldButton/>", () => {
  test("render", async () => {
    render(<HelloWorldButton />);
    const button = await screen.getByRole("button", {
      name: "Click me!",
    });
    expect(button).toBeInTheDocument();
  });
});
