"use client";

import { type FC, type PropsWithChildren, useEffect, useState } from "react";
import { initMockWorker } from "@repo/browser-utils/msw";

interface Props {
  // The request handlers to be used by the mock worker.
  handlers: Parameters<typeof initMockWorker>[0];
  // The options to start the mock worker.
  startOptions?: Parameters<typeof initMockWorker>[1];
}

/**
 * This component is used to provide the MSW context to the child components.
 *
 * @param children - The child components to be rendered.
 * @param handlers - The request handlers to be used by the mock worker.
 * @param startOptions - The options to start the mock worker.
 */
const MSWProvider: FC<PropsWithChildren<Props>> = ({
  children,
  handlers,
  startOptions,
}) => {
  // State to track the initialization of the mock worker.
  const [initialized, setInitialized] = useState(false);

  // If the mock worker is not initialized, register it.
  useEffect(
    function registerMockWorker() {
      (async function initializeMockWorker() {
        try {
          await initMockWorker(handlers, startOptions);
          setInitialized(true);
        } catch (error) {
          console.error("Failed to initialize mock worker:", error);
          setInitialized(false);
        }
      })();
    },
    [handlers, startOptions],
  );

  // If the mock worker is not initialized, return null to avoid rendering the children.
  if (!initialized) return null;

  // If the mock worker is initialized, render the children.
  return children;
};
export default MSWProvider;
