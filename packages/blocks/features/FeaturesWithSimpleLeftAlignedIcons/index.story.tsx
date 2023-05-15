import { Meta, Story } from "@storybook/react";
import FeaturesWithSimpleLeftAlignedIcons from "./index";

export default {
	component: FeaturesWithSimpleLeftAlignedIcons,
} as Meta;

export const Primary: Story = (args) => (
	<FeaturesWithSimpleLeftAlignedIcons {...args} />
);
Primary.args = {};
