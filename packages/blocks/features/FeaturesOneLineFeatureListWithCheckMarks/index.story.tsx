import { Meta, Story } from "@storybook/react";
import OneLineFeatureListWithCheckMarks from "./index";

export default {
	component: OneLineFeatureListWithCheckMarks,
} as Meta;

export const Primary: Story = (args) => (
	<OneLineFeatureListWithCheckMarks {...args} />
);
Primary.args = {};
