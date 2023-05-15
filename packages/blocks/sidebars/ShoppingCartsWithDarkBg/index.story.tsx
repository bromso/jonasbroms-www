import { Meta, Story } from "@storybook/react";
import WithDarkBg from "./index";

export default {
	component: WithDarkBg,
} as Meta;

export const Primary: Story = (args) => <WithDarkBg {...args} />;
Primary.args = {};
