import { Meta, Story } from "@storybook/react";
import NewsletterWithImage from "./index";

export default {
	component: NewsletterWithImage,
} as Meta;

export const Primary: Story = (args) => <NewsletterWithImage {...args} />;
Primary.args = {};
