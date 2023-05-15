import { Meta, Story } from "@storybook/react";
import FooterNewsletter from "./index";

export default {
	component: FooterNewsletter,
} as Meta;

export const Primary: Story = (args) => <FooterNewsletter {...args} />;
Primary.args = {};
