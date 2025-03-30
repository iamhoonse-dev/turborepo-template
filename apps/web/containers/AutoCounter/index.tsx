"use client";

import { type FC, useReducer } from "react";
import { useInterval } from "@repo/react-utils/hooks";

const AutoCounter: FC = () => {
  const [counter, increase] = useReducer((state: number) => state + 1, 0);

  useInterval(increase, 1_000);

  return <>{counter}</>;
};
export default AutoCounter;
