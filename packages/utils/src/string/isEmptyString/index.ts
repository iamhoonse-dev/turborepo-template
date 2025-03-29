/**
 * 주어진 문자열이 비어 있는지 확인합니다.
 *
 * @param value - 확인할 문자열
 * @returns 문자열이 비어 있으면 true, 그렇지 않으면 false
 *
 * @example
 * ```ts
 * isEmptyString(""); // true
 * isEmptyString("   "); // true
 * isEmptyString("hello"); // false
 * isEmptyString("  hello  "); // false
 * ```
 */
export default function isEmptyString(value: string): boolean {
  return value.trim().length === 0;
}
