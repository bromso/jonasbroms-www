import { Meta, Story } from "@storybook/react";
import LastStories from "./index";

export default {
	component: LastStories,
} as Meta;

export const Primary: Story = (args) => <LastStories {...args} />;
Primary.args = {};
