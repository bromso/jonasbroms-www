import { Meta, Story } from "@storybook/react";
import FullScreenHeroWithLogoGrid from "./index";

export default {
	component: FullScreenHeroWithLogoGrid,
} as Meta;

export const Primary: Story = (args) => (
	<FullScreenHeroWithLogoGrid {...args} />
);
Primary.args = {};
