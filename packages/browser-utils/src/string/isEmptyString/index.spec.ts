import isEmptyString from ".";
import { describe, test, expect } from "vitest";

describe("isEmptyString()", () => {
  test("should return true when an empty string is provided", () => {
    expect(isEmptyString("")).toBe(true);
  });
  test("should return true when a string with only spaces is provided", () => {
    expect(isEmptyString("   ")).toBe(true);
  });
  test("should return false when a non-empty string is provided", () => {
    expect(isEmptyString("Hello")).toBe(false);
  });
});
