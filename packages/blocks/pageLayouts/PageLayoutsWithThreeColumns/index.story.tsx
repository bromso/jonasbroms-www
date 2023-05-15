import { Meta, Story } from "@storybook/react";
import WithThreeColumns from "./index";

export default {
	component: WithThreeColumns,
} as Meta;

export const Primary: Story = (args) => <WithThreeColumns {...args} />;
Primary.args = {};
