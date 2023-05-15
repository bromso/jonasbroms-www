import { Meta, Story } from "@storybook/react";
import WithAlternateCards from "./index";

export default {
	component: WithAlternateCards,
} as Meta;

export const Primary: Story = (args) => <WithAlternateCards {...args} />;
Primary.args = {};
