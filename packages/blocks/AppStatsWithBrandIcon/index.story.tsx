import { Meta, Story } from "@storybook/react";
import AppStatsWithBrandIcon from "./index";

export default {
	component: AppStatsWithBrandIcon,
} as Meta;

export const Primary: Story = (args) => <WithBrandIcon {...args} />;
Primary.args = {};
