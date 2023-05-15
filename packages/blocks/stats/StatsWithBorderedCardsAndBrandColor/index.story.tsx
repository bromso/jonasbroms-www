import { Meta, Story } from "@storybook/react";
import WithBorderedCardsAndBrandColor from "./index";

export default {
	component: WithBorderedCardsAndBrandColor,
} as Meta;

export const Primary: Story = (args) => (
	<WithBorderedCardsAndBrandColor {...args} />
);
Primary.args = {};
