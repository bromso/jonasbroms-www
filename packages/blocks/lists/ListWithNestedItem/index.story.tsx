import { Meta, Story } from "@storybook/react";
import ListWithNestedItem from "./index";

export default {
	component: ListWithNestedItem,
} as Meta;

export const Primary: Story = (args) => <ListWithNestedItem {...args} />;
Primary.args = {};
