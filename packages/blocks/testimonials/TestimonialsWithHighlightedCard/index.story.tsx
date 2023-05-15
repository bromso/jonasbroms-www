import { Meta, Story } from "@storybook/react";
import WithHighlightedCard from "./index";

export default {
	component: WithHighlightedCard,
} as Meta;

export const Primary: Story = (args) => <WithHighlightedCard {...args} />;
Primary.args = {};
