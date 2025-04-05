"use client";

import type { FC } from "react";
import { alertHelloWorld } from "@repo/browser-utils/dom";

const HelloWorldButton: FC = () => {
  return <button onClick={alertHelloWorld}>Click me!</button>;
};
export default HelloWorldButton;
