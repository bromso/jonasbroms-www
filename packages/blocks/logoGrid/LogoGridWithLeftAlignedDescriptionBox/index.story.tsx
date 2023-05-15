import { Meta, Story } from "@storybook/react";
import WithLeftAlignedDescriptionBox from "./index";

export default {
	component: WithLeftAlignedDescriptionBox,
} as Meta;

export const Primary: Story = (args) => (
	<WithLeftAlignedDescriptionBox {...args} />
);
Primary.args = {};
