import { Meta, Story } from "@storybook/react";
import SidebarArticles from "./index";

export default {
	component: SidebarArticles,
} as Meta;

export const Primary: Story = (args) => <SidebarArticles {...args} />;
Primary.args = {};
