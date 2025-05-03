import ora from "ora";

/**
 *
 * @param fn
 * @param message
 * @param options
 */
async function withSpinner(
  fn: () => void | Promise<void>,
  message: string,
  options?: {
    successMessage?: string;
    errorMessage?: string;
  },
) {
  const spinner = ora({ text: `${message}\n` });
  spinner.start();

  try {
    await fn();
    spinner.succeed(options?.successMessage || "Success");
  } catch (error) {
    spinner.fail(options?.errorMessage || "Error");
    throw error;
  }
}
export default withSpinner;
