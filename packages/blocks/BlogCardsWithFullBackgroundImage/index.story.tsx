import { Meta, Story } from "@storybook/react";
import BlogCardsWithFullBackgroundImage from "./index";

export default {
	component: BlogCardsWithFullBackgroundImage,
} as Meta;

export const Primary: Story = (args) => (
	<BlogCardsWithFullBackgroundImage {...args} />
);
Primary.args = {};
