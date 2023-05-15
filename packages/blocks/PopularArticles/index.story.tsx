import { Meta, Story } from "@storybook/react";
import PopularArticles from "./index";

export default {
	component: PopularArticles,
} as Meta;

export const Primary: Story = (args) => <PopularArticles {...args} />;
Primary.args = {};
