import { Meta, Story } from "@storybook/react";
import ReviewQuickOverview from "./index";

export default {
	component: ReviewQuickOverview,
} as Meta;

export const Primary: Story = (args) => <ReviewQuickOverview {...args} />;
Primary.args = {};
