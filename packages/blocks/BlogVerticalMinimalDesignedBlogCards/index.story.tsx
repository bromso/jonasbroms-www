import { Meta, Story } from "@storybook/react";
import VerticalMinimalDesignedBlogCards from "./index";

export default {
	component: VerticalMinimalDesignedBlogCards,
} as Meta;

export const Primary: Story = (args) => (
	<VerticalMinimalDesignedBlogCards {...args} />
);
Primary.args = {};
