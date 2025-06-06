"use client";

import type { FC, ReactNode, ComponentProps } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { LocaleRouteParams } from "../../app/[locale]/layout";

/**
 * getLocalizedHref is a utility function that takes a locale and an href
 *
 * @param locale
 * @param href
 */
function getLocalizedHref(
  locale: LocaleRouteParams["locale"],
  href?: Props["href"],
) {
  // locale root path is the base path for the locale
  const localeRootPath = `/${locale}`;

  // if no href is provided, we return the locale root path
  if (!href) return localeRootPath;

  // if href is an absolute path, we return it as is
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }

  // If href is already a full path, we return it as is
  if (href.startsWith("/")) return `${localeRootPath}${href}`;

  // If href is not a full path, we prepend the locale root path
  return `${localeRootPath}/${href}`;
}

interface Props {
  // The children to render inside the link
  children: ReactNode;
  // The href can be a string or an object, similar to Next.js Link
  href?: string;
  // The target attribute for the link, defaulting to "_blank"
  target?: ComponentProps<typeof Link>["target"];
}

/**
 * LocalizedLink is a component that wraps Next.js Link
 * and automatically prepends the current locale
 *
 * @param children
 * @param href
 * @param target
 */
const LocalizedLink: FC<Props> = ({ children, href, target = "_blank" }) => {
  // Use Next.js router to get the current locale from the URL parameters
  const { locale } = useParams<LocaleRouteParams>();

  // If no href is provided, we simply render the children without a link
  if (!href) {
    return <>{children}</>;
  }

  // If the href is a string, we can safely append the locale
  const localizedHref = getLocalizedHref(locale, href);

  return (
    <Link href={localizedHref} target={target}>
      {children}
    </Link>
  );
};
export default LocalizedLink;
