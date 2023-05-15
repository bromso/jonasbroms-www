import { Meta, Story } from "@storybook/react";
import FeatureGridWithBackgrounds from "./index";

export default {
	component: FeatureGridWithBackgrounds,
} as Meta;

export const Primary: Story = (args) => (
	<FeatureGridWithBackgrounds {...args} />
);
Primary.args = {};
