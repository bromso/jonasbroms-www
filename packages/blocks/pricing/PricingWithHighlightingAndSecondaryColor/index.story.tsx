import { Meta, Story } from "@storybook/react";
import WithHighlightingAndSecondaryColor from "./index";

export default {
	component: WithHighlightingAndSecondaryColor,
} as Meta;

export const Primary: Story = (args) => (
	<WithHighlightingAndSecondaryColor {...args} />
);
Primary.args = {};
