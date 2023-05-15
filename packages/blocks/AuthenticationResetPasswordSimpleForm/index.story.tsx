import { Meta, Story } from "@storybook/react";
import AuthenticationResetPasswordSimpleForm from "./index";

export default {
	component: AuthenticationResetPasswordSimpleForm,
} as Meta;

export const Primary: Story = (args) => (
	<AuthenticationResetPasswordSimpleForm {...args} />
);
Primary.args = {};
