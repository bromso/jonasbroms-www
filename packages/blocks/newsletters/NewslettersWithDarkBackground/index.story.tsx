import { Meta, Story } from "@storybook/react";
import WithDarkBackground from "./index";

export default {
	component: WithDarkBackground,
} as Meta;

export const Primary: Story = (args) => <WithDarkBackground {...args} />;
Primary.args = {};
