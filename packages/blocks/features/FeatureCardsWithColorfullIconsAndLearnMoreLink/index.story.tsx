import { Meta, Story } from "@storybook/react";
import FeatureCardsWithColorfullIconsAndLearnMoreLink from "./index";

export default {
	component: FeatureCardsWithColorfullIconsAndLearnMoreLink,
} as Meta;

export const Primary: Story = (args) => (
	<FeatureCardsWithColorfullIconsAndLearnMoreLink {...args} />
);
Primary.args = {};
