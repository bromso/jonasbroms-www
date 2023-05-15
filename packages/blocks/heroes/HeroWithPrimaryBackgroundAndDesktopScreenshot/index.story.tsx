import { Meta, Story } from "@storybook/react";
import HeroWithMobileAppScreenshot from "./index";

export default {
	component: HeroWithMobileAppScreenshot,
} as Meta;

export const Primary: Story = (args) => (
	<HeroWithMobileAppScreenshot {...args} />
);
Primary.args = {};
