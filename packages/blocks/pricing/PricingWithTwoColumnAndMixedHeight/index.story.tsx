import { Meta, Story } from "@storybook/react";
import WithTwoColumnAndMixedHeight from "./index";

export default {
	component: WithTwoColumnAndMixedHeight,
} as Meta;

export const Primary: Story = (args) => (
	<WithTwoColumnAndMixedHeight {...args} />
);
Primary.args = {};
