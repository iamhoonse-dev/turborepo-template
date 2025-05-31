import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import GiscusCommentsContainer from "../../containers/GisqusCommentsContainer";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

// This function is used to generate metadata for the page.
type Props = { params: Promise<{ mdxPath: string[] }> };

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: Props) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
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
