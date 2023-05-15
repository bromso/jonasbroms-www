import { Meta, Story } from "@storybook/react";
import HeroWithFormAndBackgroundGradient from "./index";

export default {
	component: HeroWithFormAndBackgroundGradient,
} as Meta;

export const Primary: Story = (args) => (
	<HeroWithFormAndBackgroundGradient {...args} />
);
Primary.args = {};
