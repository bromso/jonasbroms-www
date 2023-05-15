import { Meta, Story } from "@storybook/react";
import FeatureCardWithCtaButton from "./index";

export default {
	component: FeatureCardWithCtaButton,
} as Meta;

export const Primary: Story = (args) => <FeatureCardWithCtaButton {...args} />;
Primary.args = {};
