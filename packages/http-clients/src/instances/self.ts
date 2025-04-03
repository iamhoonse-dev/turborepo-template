import createAxiosInstance from "@/utils/createAxiosInstance.ts";

/**
 * Creates an Axios instance for self requests.
 */
export const BASE_URL = "";

/**
 * Creates an Axios instance with the base URL for self requests.
 */
export const instance = createAxiosInstance({
  baseURL: BASE_URL,
});
