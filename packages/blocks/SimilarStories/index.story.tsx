import { Meta, Story } from "@storybook/react";
import SimilarStories from "./index";

export default {
	component: SimilarStories,
} as Meta;

export const Primary: Story = (args) => <SimilarStories {...args} />;
Primary.args = {};
