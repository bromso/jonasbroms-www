import { Meta, Story } from "@storybook/react";
import ReviewDialog from "./index";

export default {
	component: ReviewDialog,
} as Meta;

export const Primary: Story = (args) => <ReviewDialog {...args} />;
Primary.args = {};
