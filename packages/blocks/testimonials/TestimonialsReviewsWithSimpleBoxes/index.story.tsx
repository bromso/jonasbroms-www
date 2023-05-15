import { Meta, Story } from "@storybook/react";
import ReviewsWithSimpleBoxes from "./index";

export default {
	component: ReviewsWithSimpleBoxes,
} as Meta;

export const Primary: Story = (args) => <ReviewsWithSimpleBoxes {...args} />;
Primary.args = {};
