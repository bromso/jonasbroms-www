import { Meta, Story } from "@storybook/react";
import FeaturedArticle from "./index";

export default {
	component: FeaturedArticle,
} as Meta;

export const Primary: Story = (args) => <FeaturedArticle {...args} />;
Primary.args = {};
