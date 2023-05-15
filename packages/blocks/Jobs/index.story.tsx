import { Meta, Story } from "@storybook/react";
import Jobs from "./index";

export default {
	component: Jobs,
} as Meta;

export const Primary: Story = (args) => <Jobs {...args} />;
Primary.args = {};
