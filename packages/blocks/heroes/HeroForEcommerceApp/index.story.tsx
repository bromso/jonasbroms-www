import { Meta, Story } from "@storybook/react";
import HeroForEcommerceApp from "./index";

export default {
	component: HeroForEcommerceApp,
} as Meta;

export const Primary: Story = (args) => <HeroForEcommerceApp {...args} />;
Primary.args = {};
