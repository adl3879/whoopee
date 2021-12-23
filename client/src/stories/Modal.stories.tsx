import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal, { ModalProps } from "../ui/Modal";
import Button from "../ui/Button";
import * as ButtonStories from "./Button.stories";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args} />
);

export const Main = Template.bind({});
Main.args = {
  title: "Create New Space",
  isOpen: true,
  onClose: () => console.log("closed"),
};
