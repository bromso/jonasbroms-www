import { Meta, Story } from "@storybook/react";
import WithTwoColumnGrid from "./index";

export default {
	component: WithTwoColumnGrid,
} as Meta;

export const Primary: Story = (args) => <WithTwoColumnGrid {...args} />;
Primary.args = {};
