import * as React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import SpacePreview, { SpacePreviewProps } from "../ui/SpacePreview";

export default {
  title: "Space Preview",
  component: SpacePreview,
} as ComponentMeta<typeof SpacePreview>;

export const Main: Story<SpacePreviewProps> = ({
  name = "Space Name",
  image = "https://miro.medium.com/max/525/1*qPhgZgKdtSowHJQPajZVMA.png",
}) => <SpacePreview name={name} image={image} />;

Main.bind({});

export const Empty: Story<SpacePreviewProps> = ({
  name = "Very Very Very Long Space Name Is Possible",
  image = "",
}) => <SpacePreview name={name} image={image} />;

Empty.bind({});
