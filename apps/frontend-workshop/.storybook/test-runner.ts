import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";
import { injectAxe, configureAxe, checkA11y } from "axe-playwright";

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
    try {
      await checkA11y(page, element, {}, true, "junit", {
        outputDirPath: "test-results",
        outputDir: "a11y-audit",
        reportFileName: `${storyContext.title}.xml`,
      });
    } catch (error) {
      // to prevent the test-runner from failing the test
      // @see https://github.com/abhinaba-ghosh/axe-playwright/blob/master/src/index.ts#L111
      console.warn(error.message);
    }
  },
};
export default config;
