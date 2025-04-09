import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SampleButton from ".";

describe("<SampleButton>", () => {
  test("renders without crashing", () => {
    const { container } = render(<SampleButton />);
    expect(container).toBeTruthy();
  });
  test("renders clickable button", async () => {
    const { getByRole } = render(<SampleButton />);
    const button = getByRole("button", { name: "Sample Button" });
    await userEvent.click(button);
  });
});
