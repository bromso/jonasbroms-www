import { Meta, Story } from "@storybook/react";
import AppStatsWithSharedBorders from "./index";

export default {
	component: AppStatsWithSharedBorders,
} as Meta;

export const Primary: Story = (args) => <WithSharedBorders {...args} />;
Primary.args = {};
