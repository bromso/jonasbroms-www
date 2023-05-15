import { Meta, Story } from "@storybook/react";
import VerticallyAlignedBlogCardOverlappedWithDescriptionBox from "./index";

export default {
	component: VerticallyAlignedBlogCardOverlappedWithDescriptionBox,
} as Meta;

export const Primary: Story = (args) => (
	<VerticallyAlignedBlogCardOverlappedWithDescriptionBox {...args} />
);
Primary.args = {};
