import { Meta, Story } from "@storybook/react";
import VerticallyAlignedBlogCardsWithShapedImage from "./index";

export default {
	component: VerticallyAlignedBlogCardsWithShapedImage,
} as Meta;

export const Primary: Story = (args) => (
	<VerticallyAlignedBlogCardsWithShapedImage {...args} />
);
Primary.args = {};
