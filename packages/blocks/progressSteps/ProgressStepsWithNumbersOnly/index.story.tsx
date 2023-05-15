import { Meta, Story } from "@storybook/react";
import WithNumbersOnly from "./index";

export default {
	component: WithNumbersOnly,
} as Meta;

export const Primary: Story = (args) => <WithNumbersOnly {...args} />;
Primary.args = {};
