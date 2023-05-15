import { Meta, Story } from "@storybook/react";
import WithRecentPosts from "./index";

export default {
	component: WithRecentPosts,
} as Meta;

export const Primary: Story = (args) => <WithRecentPosts {...args} />;
Primary.args = {};
