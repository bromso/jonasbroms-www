import { Meta, Story } from "@storybook/react";
import QuickStart from "./index";

export default {
	component: QuickStart,
} as Meta;

export const Primary: Story = (args) => <QuickStart {...args} />;
Primary.args = {};
