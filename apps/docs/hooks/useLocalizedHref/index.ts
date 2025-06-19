"use client";

import { useParams } from "next/navigation";
import type { LocaleRouteParams } from "../../app/[locale]/layout";
import { getLocalizedHref } from "../../utils/getLocalizedHref";

/**
 * useLocalizedHref is a custom hook that takes an href with automatically prepended locale.
 *
 * @param href
 */
const useLocalizedHref = (href: string) => {
  // Use Next.js router to get the current locale from the URL parameters
  const { locale } = useParams<LocaleRouteParams>();

  // If the href is a string, we can safely append the locale
  const localizedHref = getLocalizedHref(locale, href);

  // Return the localized href
  return localizedHref;
};
export default useLocalizedHref;
