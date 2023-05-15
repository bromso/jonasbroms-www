import { Meta, Story } from "@storybook/react";
import WithHighlightingAndPrimaryColor from "./index";

export default {
	component: WithHighlightingAndPrimaryColor,
} as Meta;

export const Primary: Story = (args) => (
	<WithHighlightingAndPrimaryColor {...args} />
);
Primary.args = {};
