import type { Preview } from "@storybook/react";
import { breakpoints } from "@repo/react-ui/constants";
import "@repo/react-ui/base.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // 뷰포트 목록
    viewport: {
      viewports: {
        tailwindSmall: {
          name: "Tailwind Small",
          styles: {
            width: breakpoints.sm,
            height: "100%",
          },
        },
        tailwindMedium: {
          name: "Tailwind Medium",
          styles: {
            width: breakpoints.md,
            height: "100%",
          },
        },
        tailwindLarge: {
          name: "Tailwind Large",
          styles: {
            width: breakpoints.lg,
            height: "100%",
          },
        },
        tailwindXLarge: {
          name: "Tailwind Extra Large",
          styles: {
            width: breakpoints.xl,
            height: "100%",
          },
        },
        tailwindXXLarge: {
          name: "Tailwind 2XL",
          styles: {
            width: breakpoints["2xl"],
            height: "100%",
          },
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
