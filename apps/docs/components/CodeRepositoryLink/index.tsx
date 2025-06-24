import type { ComponentProps, FC, ReactNode } from "react";
import Link from "next/link";
import { Button } from "@repo/react-ui/shadcn-ui";
import { REPOSITORY_CODE_URL } from "../../configs/urls";

interface Props {
  // The children to render inside the link
  children: ReactNode;
  // The href can be a string or an object, similar to Next.js Link
  href: string;
  // The target attribute for the link, defaulting to "_blank"
  target?: ComponentProps<typeof Link>["target"];
}

/**
 * CodeRepositoryLink is a component that wraps Next.js Link
 * with a specific code repository URL
 *
 * @param children
 * @param href
 * @param target
 */
const CodeRepositoryLink: FC<Props> = ({
  children,
  href,
  target = "_blank",
}) => {
  // Construct the full URL for the code repository link
  const codeUrl = `${REPOSITORY_CODE_URL}${href}`;

  return (
    <Button asChild variant="link" className="px-0">
      <Link
        href={codeUrl}
        target={target}
        // for preventing reverse tapnabbing vulnerability
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    </Button>
  );
};
export default CodeRepositoryLink;
