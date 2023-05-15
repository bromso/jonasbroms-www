import { Meta, Story } from "@storybook/react";
import WithCollapsibleMenuItems from "./index";

export default {
	component: WithCollapsibleMenuItems,
} as Meta;

export const Primary: Story = (args) => <WithCollapsibleMenuItems {...args} />;
Primary.args = {};
