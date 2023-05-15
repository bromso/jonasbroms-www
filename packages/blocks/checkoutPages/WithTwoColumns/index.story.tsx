import { Meta, Story } from "@storybook/react";
import WithTwoColumns from "./index";

export default {
	component: WithTwoColumns,
} as Meta;

export const Primary: Story = (args) => <WithTwoColumns {...args} />;
Primary.args = {};
