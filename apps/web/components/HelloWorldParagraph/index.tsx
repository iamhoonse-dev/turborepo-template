"use client";

import { withHelloWorld } from "@repo/react-utils/hocs";

const MessageContainer = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => (
  <>
    <span>{title}</span>
    {message}
  </>
);

const HelloWorldParagraph = withHelloWorld(MessageContainer);
export default HelloWorldParagraph;
