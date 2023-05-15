import { Meta, Story } from "@storybook/react";
import FeaturesWithMobileScreenshot from "./index";

export default {
	component: FeaturesWithMobileScreenshot,
} as Meta;

export const Primary: Story = (args) => (
	<FeaturesWithMobileScreenshot {...args} />
);
Primary.args = {};
