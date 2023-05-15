import { Meta, Story } from "@storybook/react";
import Benefits from "./index";

export default {
	component: Benefits,
} as Meta;

export const Primary: Story = (args) => <Benefits {...args} />;
Primary.args = {};
