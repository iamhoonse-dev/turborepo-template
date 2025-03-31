import { type FC } from "react";
import { Button } from "@/base/shadcn-ui";
import { cn } from "@/lib/utils.ts";

const SampleButton: FC = () => {
  return (
    <Button className={cn("bg-red-600 text-xl text-gray-400")}>
      Sample Button
    </Button>
  );
};
export default SampleButton;
