import * as React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import LandingNavbar, { LandingNavbarProps } from "../ui/navbar/LandingNavbar";

export default {
  title: "Navbar",
  component: LandingNavbar,
} as ComponentMeta<typeof LandingNavbar>;

export const Landing: Story<LandingNavbarProps> = ({}) => (
  <div className="h-screen bg-bg">
    <LandingNavbar />
  </div>
);

LandingNavbar.bind({});
