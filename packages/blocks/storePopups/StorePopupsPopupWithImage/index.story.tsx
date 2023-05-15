import { Meta, Story } from "@storybook/react";
import PopupWithImage from "./index";

export default {
	component: PopupWithImage,
} as Meta;

export const Primary: Story = (args) => <PopupWithImage {...args} />;
Primary.args = {};
