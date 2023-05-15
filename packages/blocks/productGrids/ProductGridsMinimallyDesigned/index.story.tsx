import { Meta, Story } from "@storybook/react";
import MinimallyDesigned from "./index";

export default {
	component: MinimallyDesigned,
} as Meta;

export const Primary: Story = (args) => <MinimallyDesigned {...args} />;
Primary.args = {};
