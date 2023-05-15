import { Meta, Story } from "@storybook/react";
import WithOptionTogglerButton from "./index";

export default {
	component: WithOptionTogglerButton,
} as Meta;

export const Primary: Story = (args) => <WithOptionTogglerButton {...args} />;
Primary.args = {};
