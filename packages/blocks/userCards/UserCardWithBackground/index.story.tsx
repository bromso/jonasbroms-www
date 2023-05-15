import { Meta, Story } from "@storybook/react";
import UserCardWithBackground from "./index";

export default {
	component: UserCardWithBackground,
} as Meta;

export const Primary: Story = (args) => <UserCardWithBackground {...args} />;
Primary.args = {};
