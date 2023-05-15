import { Meta, Story } from "@storybook/react";
import CustomSelect from "./index";

export default {
	component: CustomSelect,
} as Meta;

export const Primary: Story = (args) => <CustomSelect {...args} />;
Primary.args = {};
