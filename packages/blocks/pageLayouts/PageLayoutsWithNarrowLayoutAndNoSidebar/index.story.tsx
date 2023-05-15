import { Meta, Story } from "@storybook/react";
import WithNarrowLayoutAndNoSidebar from "./index";

export default {
	component: WithNarrowLayoutAndNoSidebar,
} as Meta;

export const Primary: Story = (args) => (
	<WithNarrowLayoutAndNoSidebar {...args} />
);
Primary.args = {};
