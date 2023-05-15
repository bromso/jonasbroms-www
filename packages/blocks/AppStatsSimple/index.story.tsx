import { Meta, Story } from "@storybook/react";
import Simple from "./index";

export default {
	component: Simple,
} as Meta;

export const Primary: Story = (args) => <Simple {...args} />;
Primary.args = {};
