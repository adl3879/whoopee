import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignInButton, { SignInButtonProps } from "../ui/SignInButton";

export default {
  title: "SignInButton",
  component: SignInButton,
} as ComponentMeta<typeof SignInButton>;

const Template: ComponentStory<typeof SignInButton> = (
  args: SignInButtonProps
) => <SignInButton {...args} />;

export const Google = Template.bind({});
Google.args = {
  variant: "google",
};

export const Facebook = Template.bind({});
Facebook.args = {
  variant: "facebook",
};

export const Github = Template.bind({});
Github.args = {
  variant: "github",
};
