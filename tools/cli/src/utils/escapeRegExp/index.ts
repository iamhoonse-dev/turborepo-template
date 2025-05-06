/**
 * Escape special characters in a string for use in a regular expression.
 *
 * @param string - The string to escape.
 */
export default function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
