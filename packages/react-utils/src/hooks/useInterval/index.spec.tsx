import { describe, test, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useInterval from ".";

describe("useInterval()", () => {
  test("useInterval should be defined", () => {
    expect(useInterval).toBeDefined();
  });
  test("interval with 1 second delay after 40 seconds should call the function 40 times", () => {
    // Mock the timers
    vi.useFakeTimers();

    // Mock the function
    const fn = vi.fn();
    expect(fn).not.toBeCalled();

    // Render the hook
    const { unmount } = renderHook(() => useInterval(fn, 1_000));

    // Fast-forward time by 40 seconds
    vi.advanceTimersByTime(40_000);

    // Check if the function was called 40 times
    expect(fn).toHaveBeenCalledTimes(40);

    // clean up the mocks
    vi.restoreAllMocks();
    unmount();
  });
});
