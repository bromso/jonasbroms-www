import { Meta, Story } from "@storybook/react";
import ColorPicker from "./index";

export default {
	component: ColorPicker,
} as Meta;

export const Primary: Story = (args) => <ColorPicker {...args} />;
Primary.args = {};
