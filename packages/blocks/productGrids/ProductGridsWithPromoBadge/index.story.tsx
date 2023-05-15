import { Meta, Story } from "@storybook/react";
import WithPromoBadge from "./index";

export default {
	component: WithPromoBadge,
} as Meta;

export const Primary: Story = (args) => <WithPromoBadge {...args} />;
Primary.args = {};
