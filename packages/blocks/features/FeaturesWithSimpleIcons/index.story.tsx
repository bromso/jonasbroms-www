import { Meta, Story } from "@storybook/react";
import FeaturesWithSimpleIcons from "./index";

export default {
	component: FeaturesWithSimpleIcons,
} as Meta;

export const Primary: Story = (args) => <FeaturesWithSimpleIcons {...args} />;
Primary.args = {};
