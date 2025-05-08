import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/react-ui/shadcn-ui";

const meta = {
  title: "shadcn-ui/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "outline",
    children: "I am a Default button.",
  },
};
