import type { LocaleRouteParams } from "../../app/[locale]/layout";

/**
 * getLocalizedHref is a utility function that takes a locale and an href
 *
 * @param locale
 * @param href
 */
export function getLocalizedHref(
  locale: LocaleRouteParams["locale"],
  href: string,
) {
  // locale root path is the base path for the locale
  const localeRootPath = `/${locale}`;

  // if href is an absolute path, we return it as is
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }

  // If href is already a full path, we return it as is
  if (href.startsWith("/")) return `${localeRootPath}${href}`;

  // If href is not a full path, we prepend the locale root path
  return `${localeRootPath}/${href}`;
}
