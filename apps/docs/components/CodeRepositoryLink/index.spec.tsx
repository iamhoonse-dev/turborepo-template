import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { REPOSITORY_CODE_URL } from "../../configs/urls";
import CodeRepositoryLink from ".";

vi.mock("next/navigation", () => ({
  useParams: vi.fn(),
}));

describe("<CodeRepositoryLink>", () => {
  it("renders with correct href and target", () => {
    const { getByText } = render(
      <CodeRepositoryLink href="/path/to/code">View Code</CodeRepositoryLink>,
    );
    expect(getByText("View Code").closest("a")).toHaveAttribute(
      "href",
      `${REPOSITORY_CODE_URL}${"/path/to/code"}`,
    );
  });

  it("uses default target", () => {
    const { getByText } = render(
      <CodeRepositoryLink href="/path/to/code">View Code</CodeRepositoryLink>,
    );
    expect(getByText("View Code").closest("a")).toHaveAttribute(
      "target",
      "_blank",
    );
  });

  it("uses custom target", () => {
    const { getByText } = render(
      <CodeRepositoryLink href="/path/to/code" target="_self">
        View Code
      </CodeRepositoryLink>,
    );
    expect(getByText("View Code").closest("a")).toHaveAttribute(
      "target",
      "_self",
    );
  });
});
