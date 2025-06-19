"use client";

import type { ComponentProps, FC } from "react";
import { Cards } from "nextra/components";
import useLocalizedHref from "../../hooks/useLocalizedHref";

type Props = ComponentProps<typeof Cards.Card>;

/**
 * LocalizedCard is a component that wraps Nextra's Card component
 * and automatically prepends the current locale to the href.
 *
 * @param href
 * @param cardProps
 */
const LocalizedCard: FC<Props> = ({ href, ...cardProps }) => {
  // Use the custom hook to get the localized href based on the current locale
  const localizedHref = useLocalizedHref(href);

  // render the Card component with the localized href
  return <Cards.Card {...cardProps} href={localizedHref} />;
};
export default LocalizedCard;
