import { Meta, Story } from "@storybook/react";
import WithSplitButtons from "./index";

export default {
	component: WithSplitButtons,
} as Meta;

export const Primary: Story = (args) => <WithSplitButtons {...args} />;
Primary.args = {};
