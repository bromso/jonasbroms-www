import { Meta, Story } from "@storybook/react";
import PopupWithDiscount from "./index";

export default {
	component: PopupWithDiscount,
} as Meta;

export const Primary: Story = (args) => <PopupWithDiscount {...args} />;
Primary.args = {};
