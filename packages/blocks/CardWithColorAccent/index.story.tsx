import { Meta, Story } from "@storybook/react";
import CardWithColorAccent from "./index";

export default {
	component: CardWithColorAccent,
} as Meta;

export const Primary: Story = (args) => <CardWithColorAccent {...args} />;
Primary.args = {};
