"use client";

import type { ComponentProps, FC, ReactNode } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { LocaleRouteParams } from "../../app/[locale]/layout";
import { getLocalizedHref } from "../../utils/getLocalizedHref";

interface Props {
  // The children to render inside the link
  children: ReactNode;
  // The href can be a string or an object, similar to Next.js Link
  href: string;
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

  // If the href is a string, we can safely append the locale
  const localizedHref = getLocalizedHref(locale, href);

  return (
    <Link
      href={localizedHref}
      target={target}
      // for preventing reverse tapnabbing vulnerability
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
};
export default LocalizedLink;
