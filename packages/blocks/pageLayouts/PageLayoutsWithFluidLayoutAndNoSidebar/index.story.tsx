import { Meta, Story } from "@storybook/react";
import WithFluidLayoutAndNoSidebar from "./index";

export default {
	component: WithFluidLayoutAndNoSidebar,
} as Meta;

export const Primary: Story = (args) => (
	<WithFluidLayoutAndNoSidebar {...args} />
);
Primary.args = {};
