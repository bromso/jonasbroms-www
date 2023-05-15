import { Meta, Story } from "@storybook/react";
import FullScreenHeroWithImageSlider from "./index";

export default {
	component: FullScreenHeroWithImageSlider,
} as Meta;

export const Primary: Story = (args) => (
	<FullScreenHeroWithImageSlider {...args} />
);
Primary.args = {};
