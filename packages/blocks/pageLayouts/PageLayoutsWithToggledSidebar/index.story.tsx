import { Meta, Story } from "@storybook/react";
import WithToggledSidebar from "./index";

export default {
	component: WithToggledSidebar,
} as Meta;

export const Primary: Story = (args) => <WithToggledSidebar {...args} />;
Primary.args = {};
