import { Meta, Story } from "@storybook/react";
import CardWithAddButton from "./index";

export default {
	component: CardWithAddButton,
} as Meta;

export const Primary: Story = (args) => <CardWithAddButton {...args} />;
Primary.args = {};
