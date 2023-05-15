import { Meta, Story } from "@storybook/react";
import About from "./index";

export default {
	component: About,
} as Meta;

export const Primary: Story = (args) => <About {...args} />;
Primary.args = {};
