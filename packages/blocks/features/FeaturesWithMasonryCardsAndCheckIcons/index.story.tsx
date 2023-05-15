import { Meta, Story } from "@storybook/react";
import FeaturesWithMasonryCardsAndCheckIcons from "./index";

export default {
	component: FeaturesWithMasonryCardsAndCheckIcons,
} as Meta;

export const Primary: Story = (args) => (
	<FeaturesWithMasonryCardsAndCheckIcons {...args} />
);
Primary.args = {};
