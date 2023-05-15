import { Meta, Story } from "@storybook/react";
import UserCardGrid from "./index";

export default {
	component: UserCardGrid,
} as Meta;

export const Primary: Story = (args) => <UserCardGrid {...args} />;
Primary.args = {};
