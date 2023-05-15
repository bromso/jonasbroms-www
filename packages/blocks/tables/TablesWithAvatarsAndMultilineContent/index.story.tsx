import { Meta, Story } from "@storybook/react";
import WithAvatarsAndMultilineContent from "./index";

export default {
	component: WithAvatarsAndMultilineContent,
} as Meta;

export const Primary: Story = (args) => (
	<WithAvatarsAndMultilineContent {...args} />
);
Primary.args = {};
