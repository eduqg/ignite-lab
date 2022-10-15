import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="placeholder example" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    error: {
      options: [false, true],
      control: {
        type: 'inline-radio'
      },
      defaultValue: false
    }
  }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="placeholder" />
    )
  }
};