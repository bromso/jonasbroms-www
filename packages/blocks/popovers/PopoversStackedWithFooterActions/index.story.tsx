import { Meta, Story } from "@storybook/react";
import StackedWithFooterActions from "./index";

export default {
	component: StackedWithFooterActions,
} as Meta;

export const Primary: Story = (args) => <StackedWithFooterActions {...args} />;
Primary.args = {};
