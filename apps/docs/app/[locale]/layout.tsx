import type { ComponentProps, ReactNode } from "react";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { nextConfig } from "../../next.config";
import "nextra-theme-docs/style.css";

/**
 * this function generates static parameters for the internationalization (i18n) locales
 */
export const generateStaticParams = async () => {
  // Check if i18n locales are defined in next.config.js
  if (!nextConfig.i18n?.locales) {
    throw new Error("i18n locales are not defined in next.config.js");
  }

  // Generate static params for each locale defined in next.config.js
  return nextConfig.i18n?.locales.map((locale) => ({ locale }));
};

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={<b>turborepo-template</b>}
    // ... Your additional navbar options
  />
);

// currentYear is used in the footer to display the current year dynamically
// eslint-disable-next-line sample/no-new-date
const currentYear = new Date().getFullYear();

const footer = <Footer>MIT {currentYear} © Nextra.</Footer>;

/**
 * i18nDropdownMenu is used to generate a dropdown menu for language selection in the Nextra layout.
 */
const i18nDropdownMenu: ComponentProps<typeof Layout>["i18n"] =
  nextConfig.i18n?.locales.map((locale) => ({
    locale,
    name: (function getLabel(localeString: string) {
      switch (localeString) {
        case "en":
          return "🇺🇸English";
        case "ko":
          return "🇰🇷한국어";
        case "ja":
          return "🇯🇵日本語";
        default:
          return localeString.toUpperCase();
      }
    })(locale),
  }));

/**
 * RootLayout is the root layout component for the Nextra documentation site.
 * It sets up the HTML structure, head elements, and the main layout with a banner, navbar, footer, and page map.
 * It also handles internationalization by using the `params` prop to determine the current locale.
 */
type Props = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html
      // Not required, but good for SEO
      lang={locale}
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap(`/${locale}`)}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
          i18n={i18nDropdownMenu}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
