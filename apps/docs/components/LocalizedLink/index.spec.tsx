import { render } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import { useParams } from "next/navigation";
import LocalizedLink from ".";

vi.mock("next/navigation", () => ({
  useParams: vi.fn(),
}));

describe("<LocalizedLink>", () => {
  it("renders children without href", () => {
    (useParams as Mock).mockReturnValue({ locale: "en" });
    const { getByText } = render(<LocalizedLink>Test</LocalizedLink>);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("renders with href and locale", () => {
    (useParams as Mock).mockReturnValue({ locale: "en" });
    const { getByText } = render(
      <LocalizedLink href="/about">About Us</LocalizedLink>,
    );
    expect(getByText("About Us").closest("a")).toHaveAttribute(
      "href",
      "/en/about",
    );
  });

  it("uses default target", () => {
    (useParams as Mock).mockReturnValue({ locale: "en" });
    const { getByText } = render(
      <LocalizedLink href="/about">About Us</LocalizedLink>,
    );
    expect(getByText("About Us").closest("a")).toHaveAttribute(
      "target",
      "_blank",
    );
  });
});
