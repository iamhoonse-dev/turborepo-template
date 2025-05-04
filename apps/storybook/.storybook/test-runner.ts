import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";
import { injectAxe, checkA11y, configureAxe } from "axe-playwright";

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    // element to check
    const element = storyContext.parameters?.a11y?.element ?? "body";

    // Check a11y for current story and report results in JUnit format
    await checkA11y(
      page,
      element,
      {
        detailedReport: true,
      },
      true,
      "junit",
      {
        outputDirPath: "test-results",
        outputDir: "a11y-audit",
        reportFileName: `${storyContext.title}.xml`,
      },
    );
  },
};
export default config;
