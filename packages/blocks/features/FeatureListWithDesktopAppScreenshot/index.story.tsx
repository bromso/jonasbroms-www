import { Meta, Story } from "@storybook/react";
import FeatureListWithDesktopAppScreenshot from "./index";

export default {
	component: FeatureListWithDesktopAppScreenshot,
} as Meta;

export const Primary: Story = (args) => (
	<FeatureListWithDesktopAppScreenshot {...args} />
);
Primary.args = {};
