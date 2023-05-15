import { Meta, Story } from "@storybook/react";
import AuthenticationAuthFormWithDarkBg from "./index";

export default {
	component: AuthenticationAuthFormWithDarkBg,
} as Meta;

export const Primary: Story = (args) => (
	<AuthenticationAuthFormWithDarkBg {...args} />
);
Primary.args = {};
