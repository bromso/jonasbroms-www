import { Meta, Story } from "@storybook/react";
import IndexView from "./index";

export default {
	component: IndexView,
} as Meta;

export const Primary: Story = (args) => <IndexView {...args} />;
Primary.args = {};
