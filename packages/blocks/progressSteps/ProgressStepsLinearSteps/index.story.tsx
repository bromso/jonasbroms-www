import { Meta, Story } from "@storybook/react";
import LinearSteps from "./index";

export default {
	component: LinearSteps,
} as Meta;

export const Primary: Story = (args) => <LinearSteps {...args} />;
Primary.args = {};
