import { Meta, Story } from "@storybook/react";
import QuantityPicker from "./index";

export default {
	component: QuantityPicker,
} as Meta;

export const Primary: Story = (args) => <QuantityPicker {...args} />;
Primary.args = {};
