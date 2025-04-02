import type { Meta, StoryObj } from "@storybook/react";
import { SampleButton } from "@repo/react-ui/components";

const meta = {
  title: "components/SampleButton",
  component: SampleButton,
  tags: ["autodocs"],
} satisfies Meta<typeof SampleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
