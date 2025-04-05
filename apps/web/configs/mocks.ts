import { type ComponentProps } from "react";
import { type MSWProvider } from "@repo/react-utils/providers";

/**
 * This is used to configure the mock service worker (MSW)
 * for development and testing purposes.
 */
export const USE_MSW = process.env.NODE_ENV !== "production";

/**
 * This is used to configure the start options for the mock service worker (MSW).
 */
export const MSW_START_OPTIONS: ComponentProps<
  typeof MSWProvider
>["startOptions"] = {
  onUnhandledRequest(request, print) {
    if (request.url.includes("_next")) {
      return;
    }
    print.warning();
  },
};
