import { Meta, Story } from "@storybook/react";
import NewsletterWithCard from "./index";

export default {
	component: NewsletterWithCard,
} as Meta;

export const Primary: Story = (args) => <NewsletterWithCard {...args} />;
Primary.args = {};
