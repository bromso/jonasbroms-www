import { Meta, Story } from "@storybook/react";
import AuthenticationSimpleSignInForm from "./index";

export default {
	component: AuthenticationSimpleSignInForm,
} as Meta;

export const Primary: Story = (args) => (
	<AuthenticationSimpleSignInForm {...args} />
);
Primary.args = {};
