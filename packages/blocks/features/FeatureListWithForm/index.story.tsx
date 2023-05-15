import { Meta, Story } from "@storybook/react";
import FeatureListWithForm from "./index";

export default {
	component: FeatureListWithForm,
} as Meta;

export const Primary: Story = (args) => <FeatureListWithForm {...args} />;
Primary.args = {};
