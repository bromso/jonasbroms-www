import { Meta, Story } from "@storybook/react";
import CartWithOrderSummery from "./index";

export default {
	component: CartWithOrderSummery,
} as Meta;

export const Primary: Story = (args) => <CartWithOrderSummery {...args} />;
Primary.args = {};
