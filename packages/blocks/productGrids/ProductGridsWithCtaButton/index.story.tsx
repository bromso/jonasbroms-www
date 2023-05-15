import { Meta, Story } from "@storybook/react";
import WithCtaButton from "./index";

export default {
	component: WithCtaButton,
} as Meta;

export const Primary: Story = (args) => <WithCtaButton {...args} />;
Primary.args = {};
