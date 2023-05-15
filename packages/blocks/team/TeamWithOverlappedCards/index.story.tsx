import { Meta, Story } from "@storybook/react";
import WithOverlappedCards from "./index";

export default {
	component: WithOverlappedCards,
} as Meta;

export const Primary: Story = (args) => <WithOverlappedCards {...args} />;
Primary.args = {};
