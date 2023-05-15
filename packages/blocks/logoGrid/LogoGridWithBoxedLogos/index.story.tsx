import { Meta, Story } from "@storybook/react";
import WithBoxedLogos from "./index";

export default {
	component: WithBoxedLogos,
} as Meta;

export const Primary: Story = (args) => <WithBoxedLogos {...args} />;
Primary.args = {};
