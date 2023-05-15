import { Meta, Story } from "@storybook/react";
import FeaturesWithIllustration from "./index";

export default {
	component: FeaturesWithIllustration,
} as Meta;

export const Primary: Story = (args) => <FeaturesWithIllustration {...args} />;
Primary.args = {};
