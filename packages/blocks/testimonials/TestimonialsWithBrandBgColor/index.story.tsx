import { Meta, Story } from "@storybook/react";
import WithBrandBgColor from "./index";

export default {
	component: WithBrandBgColor,
} as Meta;

export const Primary: Story = (args) => <WithBrandBgColor {...args} />;
Primary.args = {};
