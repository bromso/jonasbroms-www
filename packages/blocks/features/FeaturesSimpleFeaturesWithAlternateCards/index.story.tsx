import { Meta, Story } from "@storybook/react";
import SimpleFeaturesWithAlternateCards from "./index";

export default {
	component: SimpleFeaturesWithAlternateCards,
} as Meta;

export const Primary: Story = (args) => (
	<SimpleFeaturesWithAlternateCards {...args} />
);
Primary.args = {};
