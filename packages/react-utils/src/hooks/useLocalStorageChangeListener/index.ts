import { useEffect } from "react";

/**
 * Custom hook to register a listener for localStorage changes.
 *
 * @param targetKey - The key in localStorage to listen for changes.
 * @param onLocalStorageChange - Optional callback function that will be called with the new value when the localStorage changes.
 *
 * @example
 * ```tsx
 * const TARGET_KEY = "myKey";
 *
 * useLocalStorageChangeListener(TARGET_KEY, (newValue) => {
 *   console.log(`"${TARGET_KEY}" changed to : `, newValue);
 * });
 * ```
 */
export default function useLocalStorageChangeListener(
  targetKey: string,
  onLocalStorageChange?: (value: StorageEvent["newValue"]) => void,
): void {
  useEffect(
    function registerLocalStorageChangeListener() {
      /**
       * Function to handle localStorage changes.
       *
       * @param event - The StorageEvent object containing information about the change.
       */
      function handleLocalStorageChange(event: StorageEvent) {
        // Check if the event is for the specific key we are interested in
        const { key, newValue } = event;
        if (key !== targetKey) return;

        // Call the provided callback function with the new value
        onLocalStorageChange?.(newValue);
      }

      // Register the localStorage change listener
      window.addEventListener("storage", handleLocalStorageChange);

      /**
       * Cleanup function to remove the localStorage change listener.
       */
      return function cleanupLocalStorageChangeListener() {
        window.removeEventListener("storage", handleLocalStorageChange);
      };
    },
    [targetKey, onLocalStorageChange],
  );
}
