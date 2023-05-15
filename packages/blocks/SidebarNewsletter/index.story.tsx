import { Meta, Story } from "@storybook/react";
import SidebarNewsletter from "./index";

export default {
	component: SidebarNewsletter,
} as Meta;

export const Primary: Story = (args) => <SidebarNewsletter {...args} />;
Primary.args = {};
