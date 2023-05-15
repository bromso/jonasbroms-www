import { Meta, Story } from "@storybook/react";
import WithLeftAlignedDescriptionBoxAndBoxedLogos from "./index";

export default {
	component: WithLeftAlignedDescriptionBoxAndBoxedLogos,
} as Meta;

export const Primary: Story = (args) => (
	<WithLeftAlignedDescriptionBoxAndBoxedLogos {...args} />
);
Primary.args = {};
