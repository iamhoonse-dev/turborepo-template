"use client";

import type { FC, ReactNode, ComponentProps } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {
  // The children to render inside the link
  children: ReactNode;
  // The href can be a string or an object, similar to Next.js Link
  href?: ComponentProps<typeof Link>["href"];
  // The target attribute for the link, defaulting to "_blank"
  target?: ComponentProps<typeof Link>["target"];
}

/**
 * LinkLocaled is a component that wraps Next.js Link
 * and automatically prepends the current locale
 *
 * @param children
 * @param href
 * @param target
 */
const LinkLocaled: FC<Props> = ({ children, href, target = "_blank" }) => {
  // Use Next.js router to get the current locale from the URL parameters
  const { locale } = useParams();

  // If no href is provided, we simply render the children without a link
  if (!href) {
    return <>{children}</>;
  }

  // If the href is a string, we can safely append the locale
  const localizedHref = typeof href === "string" ? `/${locale}${href}` : href;

  return (
    <Link href={localizedHref} target={target}>
      {children}
    </Link>
  );
};
export default LinkLocaled;
