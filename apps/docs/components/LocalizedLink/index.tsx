"use client";

import type { ComponentProps, FC, ReactNode } from "react";
import Link from "next/link";
import useLocalizedHref from "../../hooks/useLocalizedHref";

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
  // Use the custom hook to get the localized href based on the current locale
  const localizedHref = useLocalizedHref(href);

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
