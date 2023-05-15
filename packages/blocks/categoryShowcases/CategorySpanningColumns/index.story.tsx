import { Meta, Story } from "@storybook/react";
import SpanningColumns from "./index";

export default {
	component: SpanningColumns,
} as Meta;

export const Primary: Story = (args) => <SpanningColumns {...args} />;
Primary.args = {};
