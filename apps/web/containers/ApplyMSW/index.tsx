"use client";

import type { FC, PropsWithChildren } from "react";
import { MSWProvider } from "@repo/react-utils/providers";
import { MSW_START_OPTIONS } from "../../configs/mocks";

const ApplyMSW: FC<PropsWithChildren> = ({ children }) => {
  return <MSWProvider startOptions={MSW_START_OPTIONS}>{children}</MSWProvider>;
};
export default ApplyMSW;
