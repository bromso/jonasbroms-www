import { Meta, Story } from "@storybook/react";
import ReviewOverview from "./index";

export default {
	component: ReviewOverview,
} as Meta;

export const Primary: Story = (args) => <ReviewOverview {...args} />;
Primary.args = {};
