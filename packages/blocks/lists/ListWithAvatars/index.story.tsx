import { Meta, Story } from "@storybook/react";
import WithAvatars from "./index";

export default {
	component: WithAvatars,
} as Meta;

export const Primary: Story = (args) => <WithAvatars {...args} />;
Primary.args = {};
