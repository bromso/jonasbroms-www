import { Meta, Story } from "@storybook/react";
import WithSimpleBorderedCards from "./index";

export default {
	component: WithSimpleBorderedCards,
} as Meta;

export const Primary: Story = (args) => <WithSimpleBorderedCards {...args} />;
Primary.args = {};
