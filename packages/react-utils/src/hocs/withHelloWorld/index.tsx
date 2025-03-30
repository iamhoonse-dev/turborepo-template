import { type ComponentType } from "react";

/**
 * Name of the prop that is required by the component
 */
const MESSAGE_PROP_NAME = "message" as const;

/**
 * Props that are required by the component
 */
type RequiredProps = { [MESSAGE_PROP_NAME]: string };

/**
 * Hello World message
 */
const HELLO_WORLD_MESSAGE = "Hello World" as const;

/**
 * Higher Order Component that adds a hello world message to the component
 *
 * @param Comp - The component to wrap
 * @returns A new component that renders the original component with the hello world message
 *
 * @example
 * ```tsx
 * const HelloWorldButton = withHelloWorld(Button);
 * ```
 *
 * @see https://reactjs.org/docs/higher-order-components.html
 */
export default function withHelloWorld<P extends RequiredProps>(
  Comp: ComponentType<P>,
) {
  return function HelloWorldComponent(props: Omit<P, keyof RequiredProps>) {
    const newProps = { ...props, message: HELLO_WORLD_MESSAGE } as P;
    return <Comp {...newProps} />;
  };
}
