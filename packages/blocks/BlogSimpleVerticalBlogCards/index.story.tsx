import { Meta, Story } from "@storybook/react";
import SimpleVerticalBlogCards from "./index";

export default {
	component: SimpleVerticalBlogCards,
} as Meta;

export const Primary: Story = (args) => <SimpleVerticalBlogCards {...args} />;
Primary.args = {};
