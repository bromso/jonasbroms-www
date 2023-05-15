import { Meta, Story } from "@storybook/react";
import UserCardWithRating from "./index";

export default {
	component: UserCardWithRating,
} as Meta;

export const Primary: Story = (args) => <UserCardWithRating {...args} />;
Primary.args = {};
