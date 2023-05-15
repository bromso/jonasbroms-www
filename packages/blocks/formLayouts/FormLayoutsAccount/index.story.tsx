import { Meta, Story } from "@storybook/react";
import Account from "./index";

export default {
	component: Account,
} as Meta;

export const Primary: Story = (args) => <Account {...args} />;
Primary.args = {};
