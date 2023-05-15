import { Meta, Story } from "@storybook/react";
import HeroWithIllustrationAndSearchBar from "./index";

export default {
	component: HeroWithIllustrationAndSearchBar,
} as Meta;

export const Primary: Story = (args) => (
	<HeroWithIllustrationAndSearchBar {...args} />
);
Primary.args = {};
