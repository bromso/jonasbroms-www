import { Meta, Story } from "@storybook/react";
import CompareTable from "./index";

export default {
	component: CompareTable,
} as Meta;

export const Primary: Story = (args) => <CompareTable {...args} />;
Primary.args = {};
