import { Meta, Story } from "@storybook/react";
import EmptyCart from "./index";

export default {
	component: EmptyCart,
} as Meta;

export const Primary: Story = (args) => <EmptyCart {...args} />;
Primary.args = {};
