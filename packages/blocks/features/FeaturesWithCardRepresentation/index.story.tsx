import { Meta, Story } from "@storybook/react";
import FeaturesWithCardRepresentation from "./index";

export default {
	component: FeaturesWithCardRepresentation,
} as Meta;

export const Primary: Story = (args) => (
	<FeaturesWithCardRepresentation {...args} />
);
Primary.args = {};
