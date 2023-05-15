import { Meta, Story } from "@storybook/react";
import WithActionButtons from "./index";

export default {
	component: WithActionButtons,
} as Meta;

export const Primary: Story = (args) => <WithActionButtons {...args} />;
Primary.args = {};
