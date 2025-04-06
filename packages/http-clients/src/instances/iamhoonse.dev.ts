import createAxiosInstance from "@/utils/createAxiosInstance.ts";

/**
 * Creates an Axios instance for iamhoonse.dev requests.
 */
export const BASE_URL = "https://iamhoonse.dev";

/**
 * Creates an Axios instance with the base URL for iamhoonse.dev requests.
 */
export const instance = createAxiosInstance({
  baseURL: BASE_URL,
});
