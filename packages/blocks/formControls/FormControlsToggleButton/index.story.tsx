import { Meta, Story } from "@storybook/react";
import ToggleButton from "./index";

export default {
	component: ToggleButton,
} as Meta;

export const Primary: Story = (args) => <ToggleButton {...args} />;
Primary.args = {};
