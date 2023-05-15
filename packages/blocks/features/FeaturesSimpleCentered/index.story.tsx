import { Meta, Story } from "@storybook/react";
import SimpleCentered from "./index";

export default {
	component: SimpleCentered,
} as Meta;

export const Primary: Story = (args) => <SimpleCentered {...args} />;
Primary.args = {};
