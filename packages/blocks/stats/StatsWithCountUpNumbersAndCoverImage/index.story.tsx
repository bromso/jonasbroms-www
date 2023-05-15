import { Meta, Story } from "@storybook/react";
import WithCountUpNumbersAndCoverImage from "./index";

export default {
	component: WithCountUpNumbersAndCoverImage,
} as Meta;

export const Primary: Story = (args) => (
	<WithCountUpNumbersAndCoverImage {...args} />
);
Primary.args = {};
