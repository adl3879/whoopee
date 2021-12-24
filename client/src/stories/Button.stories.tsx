import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonProps } from "../ui/Button";

export default {
  component: Button,
  title: "Button",
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Create new space",
  rounded: true,
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Log out",
  rounded: false,
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Create Space",
  rounded: false,
  variant: "tertiary",
};

export const Full = Template.bind({});
Full.args = {
  label: "100% Wide Button",
  rounded: false,
  variant: "tertiary",
  full: true,
};
