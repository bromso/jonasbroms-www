import { Meta, Story } from "@storybook/react";
import SizePicker from "./index";

export default {
	component: SizePicker,
} as Meta;

export const Primary: Story = (args) => <SizePicker {...args} />;
Primary.args = {};
