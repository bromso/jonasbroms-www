import { Meta, Story } from "@storybook/react";
import WithLargeImage from "./index";

export default {
	component: WithLargeImage,
} as Meta;

export const Primary: Story = (args) => <WithLargeImage {...args} />;
Primary.args = {};
