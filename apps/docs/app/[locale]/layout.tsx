import type { ComponentProps, ReactNode } from "react";
import type { PageMapItem } from "nextra";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { nextConfig } from "../../next.config";
import "nextra-theme-docs/style.css";
import "@repo/react-ui/base.css";

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

const logo = <b>turborepo-template</b>;

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;

// currentYear is used in the footer to display the current year dynamically
// eslint-disable-next-line sample/no-new-date
const currentYear = new Date().getFullYear();

const footer = <Footer>MIT {currentYear} © Nextra.</Footer>;

// feedbackOptions is used to configure the feedback options in the Nextra layout.
const feedbackOptions: ComponentProps<typeof Layout>["feedback"] = {
  content: null,
};

/**
 * getLabelFromLocale is a utility function that returns a localized label for a given locale string.
 *
 * @param locale - The locale string (e.g., "en", "ko", "ja").
 */
function getLabelFromLocale(locale: string) {
  switch (locale) {
    case "en":
      return "🇺🇸English";
    case "ko":
      return "🇰🇷한국어";
    case "ja":
      return "🇯🇵日本語";
    default:
      return locale.toUpperCase();
  }
}

/**
 * mapLocale is a utility function that maps a PageMapItem to include the locale in its route.
 * It prefixes the route with the locale and recursively maps any children pages.
 *
 * @param locale - The locale string to prefix the route with.
 */
const mapLocale =
  (locale: string) =>
  (page: PageMapItem): PageMapItem => ({
    ...page,
    // Ensure the route is prefixed with the locale
    // @ts-expect-error TS2339
    route: `/${locale}${page.route}`,
    // @ts-expect-error TS2339
    children: page.children?.map(mapLocale(locale)),
  });

/**
 * i18nDropdownMenu is used to generate a dropdown menu for language selection in the Nextra layout.
 */
const i18nDropdownMenu: ComponentProps<typeof Layout>["i18n"] =
  nextConfig.i18n?.locales.map((locale) => ({
    locale,
    name: getLabelFromLocale(locale),
  }));

/**
 * LocaleRouteParams is a type that represents the route parameters for the locale.
 */
export type LocaleRouteParams = { locale: string };

/**
 * RootLayout is the root layout component for the Nextra documentation site.
 * It sets up the HTML structure, head elements, and the main layout with a banner, navbar, footer, and page map.
 * It also handles internationalization by using the `params` prop to determine the current locale.
 */
type Props = Readonly<{
  children: ReactNode;
  params: Promise<LocaleRouteParams>;
}>;

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  const pageMap = await getPageMap(`/${locale}`);
  const pageMapLocale = pageMap.map(mapLocale(locale));

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
          navbar={
            <Navbar
              logo={logo}
              logoLink={`/${locale}`}
              projectLink="https://github.com/iamhoonse-dev/turborepo-template"
            />
          }
          pageMap={pageMapLocale}
          docsRepositoryBase="https://github.com/iamhoonse-dev/turborepo-template/tree/main/apps/docs"
          footer={footer}
          // ... Your additional layout options
          i18n={i18nDropdownMenu}
          navigation={false}
          feedback={feedbackOptions}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
