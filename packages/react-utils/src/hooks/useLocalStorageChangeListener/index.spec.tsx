import { describe, test, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useLocalStorageChangeListener from ".";

describe("useLocalStorageChangeListener()", () => {
  test("should register a listener for localStorage changes", () => {
    // Mock the localStorage
    const targetKey = "testKey";
    const onLocalStorageChange = vi.fn();

    // Render the hook
    renderHook(() =>
      useLocalStorageChangeListener(targetKey, onLocalStorageChange),
    );

    // Simulate a localStorage change
    const event = new StorageEvent("storage", {
      key: targetKey,
      newValue: JSON.stringify({ data: "newValue" }),
    });
    window.dispatchEvent(event);

    // Check if the callback was called with the new value
    expect(onLocalStorageChange).toHaveBeenCalledWith(event.newValue);
  });

  test("should not call the callback for different keys", () => {
    const targetKey = "testKey";
    const onLocalStorageChange = vi.fn();

    // Render the hook
    renderHook(() =>
      useLocalStorageChangeListener(targetKey, onLocalStorageChange),
    );

    // Simulate a localStorage change for a different key
    const event = new StorageEvent("storage", {
      key: "differentKey",
      newValue: JSON.stringify({ data: "ignoredValue" }),
    });
    window.dispatchEvent(event);

    // Check if the callback was not called
    expect(onLocalStorageChange).not.toHaveBeenCalled();
  });
});
