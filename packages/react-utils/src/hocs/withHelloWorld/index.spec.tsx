import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import withHelloWorld from ".";

describe("withHelloWorld()", () => {
  test("should be defined", () => {
    expect(withHelloWorld).toBeDefined();
  });
  test("should return a function", () => {
    const Comp = () => null;
    const HOC = withHelloWorld(Comp);
    expect(HOC).toBeInstanceOf(Function);
  });
  test("should include the message prop", () => {
    const Comp = (props: { message: string }) => props.message;
    const HOC = withHelloWorld(Comp);
    const result = HOC({});
    expect(result.props.message).toBe("Hello World");
  });
  test("should render the wrapped component", async () => {
    // Define a simple component
    const Comp = (props: { message: string }) => (
      <button>{props.message}</button>
    );

    // Wrap the component with the HOC
    const HOC = withHelloWorld(Comp);

    // Render the wrapped component
    const { getByRole } = render(<HOC />);

    // Check if the button is rendered
    const button = getByRole("button", { name: "Hello World" });
    expect(button).toBeInTheDocument();

    // Check if the button is clickable
    await userEvent.click(button);
  });
});
