import { Meta, Story } from "@storybook/react";
import GetStarted from "./index";

export default {
	component: GetStarted,
} as Meta;

export const Primary: Story = (args) => <GetStarted {...args} />;
Primary.args = {};
