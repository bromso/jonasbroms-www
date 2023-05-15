import { Meta, Story } from "@storybook/react";
import ListWithVerticalLine from "./index";

export default {
	component: ListWithVerticalLine,
} as Meta;

export const Primary: Story = (args) => <ListWithVerticalLine {...args} />;
Primary.args = {};
