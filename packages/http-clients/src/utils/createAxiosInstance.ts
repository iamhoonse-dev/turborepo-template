import axios, { type CreateAxiosDefaults } from "axios";

/**
 * Creates an Axios instance with the provided configuration.
 *
 * @param config - Optional configuration for the Axios instance.
 * @returns An Axios instance.
 */
export default function createAxiosInstance(config?: CreateAxiosDefaults) {
  return axios.create(config);
}
