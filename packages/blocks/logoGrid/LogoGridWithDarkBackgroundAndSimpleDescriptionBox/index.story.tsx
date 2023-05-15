import { Meta, Story } from "@storybook/react";
import WithDarkBackgroundAndSimpleDescriptionBox from "./index";

export default {
	component: WithDarkBackgroundAndSimpleDescriptionBox,
} as Meta;

export const Primary: Story = (args) => (
	<WithDarkBackgroundAndSimpleDescriptionBox {...args} />
);
Primary.args = {};
