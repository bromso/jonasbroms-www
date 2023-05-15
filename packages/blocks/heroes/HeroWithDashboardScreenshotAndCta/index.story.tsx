import { Meta, Story } from "@storybook/react";
import HeroWithDashboardScreenshotAndCta from "./index";

export default {
	component: HeroWithDashboardScreenshotAndCta,
} as Meta;

export const Primary: Story = (args) => (
	<HeroWithDashboardScreenshotAndCta {...args} />
);
Primary.args = {};
