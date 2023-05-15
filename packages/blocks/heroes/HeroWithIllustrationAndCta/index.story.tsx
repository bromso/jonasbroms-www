import { Meta, Story } from "@storybook/react";
import HeroWithIllustrationAndCta from "./index";

export default {
	component: HeroWithIllustrationAndCta,
} as Meta;

export const Primary: Story = (args) => (
	<HeroWithIllustrationAndCta {...args} />
);
Primary.args = {};
