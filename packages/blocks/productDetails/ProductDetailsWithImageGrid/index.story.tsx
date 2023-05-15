import { Meta, Story } from "@storybook/react";
import WithImageGrid from "./index";

export default {
	component: WithImageGrid,
} as Meta;

export const Primary: Story = (args) => <WithImageGrid {...args} />;
Primary.args = {};
