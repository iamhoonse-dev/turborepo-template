"use client";

import { type FC, useEffect, useState } from "react";
import { selfInstance } from "@repo/http-clients/instances";

const AxiosOnClient: FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(function () {
    (async function () {
      setLoading(true);
      try {
        const response = await selfInstance.get("/foo");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h3>{JSON.stringify(loading)}</h3>
      {data && <p>{JSON.stringify(data)}</p>}
      {error && <p>{JSON.stringify(error)}</p>}
    </>
  );
};
export default AxiosOnClient;
