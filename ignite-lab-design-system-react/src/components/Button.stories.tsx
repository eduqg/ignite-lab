import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button Text",
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
