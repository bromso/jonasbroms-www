import { Meta, Story } from "@storybook/react";
import WithSimpleCards from "./index";

export default {
	component: WithSimpleCards,
} as Meta;

export const Primary: Story = (args) => <WithSimpleCards {...args} />;
Primary.args = {};
