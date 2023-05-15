import { Meta, Story } from "@storybook/react";
import PopupBoxWithProductDetails from "./index";

export default {
	component: PopupBoxWithProductDetails,
} as Meta;

export const Primary: Story = (args) => (
	<PopupBoxWithProductDetails {...args} />
);
Primary.args = {};
