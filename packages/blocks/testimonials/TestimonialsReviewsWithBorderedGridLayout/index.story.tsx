import { Meta, Story } from "@storybook/react";
import ReviewsWithBorderedGridLayout from "./index";

export default {
	component: ReviewsWithBorderedGridLayout,
} as Meta;

export const Primary: Story = (args) => (
	<ReviewsWithBorderedGridLayout {...args} />
);
Primary.args = {};
