import { Meta, Story } from "@storybook/react";
import WithOutlinedCards from "./index";

export default {
	component: WithOutlinedCards,
} as Meta;

export const Primary: Story = (args) => <WithOutlinedCards {...args} />;
Primary.args = {};
