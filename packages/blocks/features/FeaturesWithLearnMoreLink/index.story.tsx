import { Meta, Story } from "@storybook/react";
import FeaturesWithLearnMoreLink from "./index";

export default {
	component: FeaturesWithLearnMoreLink,
} as Meta;

export const Primary: Story = (args) => <FeaturesWithLearnMoreLink {...args} />;
Primary.args = {};
