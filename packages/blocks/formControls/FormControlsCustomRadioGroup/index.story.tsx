import { Meta, Story } from "@storybook/react";
import CustomRadioGroup from "./index";

export default {
	component: CustomRadioGroup,
} as Meta;

export const Primary: Story = (args) => <CustomRadioGroup {...args} />;
Primary.args = {};
