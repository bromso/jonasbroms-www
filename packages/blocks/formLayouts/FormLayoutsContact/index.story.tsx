import { Meta, Story } from "@storybook/react";
import Contact from "./index";

export default {
	component: Contact,
} as Meta;

export const Primary: Story = (args) => <Contact {...args} />;
Primary.args = {};
