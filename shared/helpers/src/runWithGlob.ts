import { globSync } from "glob";

/**
 * run a job with a glob pattern
 *
 * @param pattern - glob pattern
 * @param job - job to run for each file
 * @param ignore - ignore pattern
 * @returns promise of array of results
 */
export function runWithGlob<R>(
  pattern: Parameters<typeof globSync>[0],
  job: (file: string) => R,
  ignore: Parameters<typeof globSync>[1]["ignore"],
) {
  // get the files from the glob pattern
  const filesFromGlob = globSync(pattern, {
    ignore: ignore,
  });

  // run the job for each file and return the results
  return filesFromGlob.map(job);
}
