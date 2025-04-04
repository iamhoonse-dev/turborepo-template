"use client";

import { type FC, type PropsWithChildren, useEffect, useState } from "react";
import { initMockWorker } from "@repo/http-clients/mocks";

interface Props {
  // The options to start the mock worker.
  startOptions?: Parameters<typeof initMockWorker>[0];
}

/**
 * This component is used to provide the MSW context to the child components.
 */
const MSWProvider: FC<PropsWithChildren<Props>> = ({
  children,
  startOptions,
}) => {
  // State to track the initialization of the mock worker.
  const [initialized, setInitialized] = useState(false);

  // If the mock worker is not initialized, register it.
  useEffect(
    function registerMockWorker() {
      (async function initializeMockWorker() {
        try {
          await initMockWorker(startOptions);
          setInitialized(true);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          setInitialized(false);
        }
      })();
    },
    [startOptions],
  );

  // If the mock worker is not initialized, return null to avoid rendering the children.
  if (!initialized) return null;

  // If the mock worker is initialized, render the children.
  return children;
};
export default MSWProvider;
