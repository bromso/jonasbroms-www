import { Meta, Story } from "@storybook/react";
import BlogWithLargeImage from "./index";

export default {
	component: BlogWithLargeImage,
} as Meta;

export const Primary: Story = (args) => <BlogWithLargeImage {...args} />;
Primary.args = {};
