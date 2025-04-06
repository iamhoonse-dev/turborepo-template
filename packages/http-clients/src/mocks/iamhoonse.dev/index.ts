import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/instances/iamhoonse.dev";
import type { Bar } from "@/types/iamhoonse.dev";

export const handlers = [
  // Intercept "GET ${BASE_URL}/bar" requests...
  http.get(`${BASE_URL}/bar`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json<Bar>({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "Sehoon",
      lastName: "Choi",
    });
  }),
];
