import { Meta, Story } from "@storybook/react";
import StackedCustomRadioGroup from "./index";

export default {
	component: StackedCustomRadioGroup,
} as Meta;

export const Primary: Story = (args) => <StackedCustomRadioGroup {...args} />;
Primary.args = {};
