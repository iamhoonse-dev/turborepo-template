"use client";

import type { FC } from "react";
import Giscus from "@giscus/react";
import { useTheme } from "nextra-theme-docs";

interface Props {
  /**
   * Giscus repository name.
   */
  repo: `${string}/${string}`;

  /**
   * Giscus repository ID.
   */
  repoId: string;

  /**
   * Giscus discussion category.
   */
  category: string;

  /**
   * Giscus discussion category ID.
   */
  categoryId: string;
}

/**
 * GiscusCommentsContainer component for rendering Giscus comments.
 *
 * @param repo
 * @param repoId
 * @param category
 * @param categoryId
 */
const GiscusCommentsContainer: FC<Props> = ({
  repo,
  repoId,
  category,
  categoryId,
}) => {
  // Get the current Nextra theme
  const { theme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      lang="ko"
    />
  );
};
export default GiscusCommentsContainer;
