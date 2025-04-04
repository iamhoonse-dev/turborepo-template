import type { FC } from "react";
import { selfInstance } from "@repo/http-clients/instances";

const AxiosOnServer: FC = async () => {
  try {
    const response = await selfInstance.get("/foo");
    return <>{JSON.stringify(response.data)}</>;
  } catch (error) {
    return <>{JSON.stringify(error)}</>;
  }
};
export default AxiosOnServer;
