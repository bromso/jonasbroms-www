import { Meta, Story } from "@storybook/react";
import WithFixedSidebar from "./index";

export default {
	component: WithFixedSidebar,
} as Meta;

export const Primary: Story = (args) => <WithFixedSidebar {...args} />;
Primary.args = {};
