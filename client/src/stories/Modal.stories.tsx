import * as React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Modal, { ModalProps } from "../ui/Modal";
import Button from "../ui/Button";
import SignInButton from "../ui/SignInButton";

export default {S
  title: "Modal",
  component: Modal,
  argTypes: { onClose: { action: "clicked" } },
} as ComponentMeta<typeof Modal>;

export const Form: Story<ModalProps> = ({
  title = "Create New Space",
  isOpen = true,
  onClose = () => console.log("closed"),
}) => (
  <div>
    background
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <div className="mb-4">Something is in the water</div>
      <Button label="Create Space" onClick={() => console.log("hey")} full />
    </Modal>
  </div>
);

Form.bind({});

export const SignIn: Story<ModalProps> = ({
  title = "Sign In",
  isOpen = true,
  onClose = () => console.log("closed"),
}) => (
  <Modal title={title} isOpen={isOpen} onClose={onClose}>
    <SignInButton variant="google" /> <br />
    <SignInButton variant="facebook" /> <br />
    <SignInButton variant="github" /> <br />
  </Modal>
);

SignIn.bind({});
