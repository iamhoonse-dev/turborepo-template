import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";
import GiscusCommentsContainer from "../../../containers/GisqusCommentsContainer";
import type { LocaleRouteParams } from "../layout";

export const generateStaticParams = generateStaticParamsFor(
  "mdxPath",
  "locale",
);

/**
 * MdxPathRouteParams is a type that represents the route parameters for the markdown  path.
 */
export type MdxPathRouteParams = { mdxPath: string[] };

// This function is used to generate metadata for the page.
type Props = {
  params: Promise<LocaleRouteParams & MdxPathRouteParams>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath, params.locale);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: Props) {
  const params = await props.params;
  const result = await importPage(params.mdxPath, params.locale);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
      <GiscusCommentsContainer
        repo={process.env.GISCUS_REPO}
        repoId={process.env.GISCUS_REPO_ID}
        category={process.env.GISCUS_DISCUSSION_CATEGORY}
        categoryId={process.env.GISCUS_DISCUSSION_CATEGORY_ID}
      />
    </Wrapper>
  );
}
