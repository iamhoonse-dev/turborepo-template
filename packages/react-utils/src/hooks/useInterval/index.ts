import { useEffect, useRef } from "react";

type Params = Parameters<typeof setInterval>;

/**
 * A hook to set up an interval timer.
 *
 * @param handler - The function to be executed at each interval.
 * @param timeout - The delay between intervals (in milliseconds).
 * @param args - Additional arguments to pass to the handler function.
 *
 * @example
 * ```tsx
 * const [count, setCount] = useState(0);
 *
 * useInterval(() => {
 *   setCount((prevCount) => prevCount + 1);
 * }, 1_000);
 * ```
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/setInterval}
 */
export default function useInterval(...[handler, timeout, ...args]: Params) {
  const timerID = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(
    function setupIntervalTimer() {
      timerID.current = setInterval(handler, timeout, ...args);

      return function cleanupIntervalTimer() {
        if (timerID.current) {
          clearInterval(timerID.current);
        }
      };
    },
    [handler, timeout, args],
  );
}
