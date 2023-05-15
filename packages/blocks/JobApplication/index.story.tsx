import { Meta, Story } from "@storybook/react";
import JobApplication from "./index";

export default {
	component: JobApplication,
} as Meta;

export const Primary: Story = (args) => <JobApplication {...args} />;
Primary.args = {};
