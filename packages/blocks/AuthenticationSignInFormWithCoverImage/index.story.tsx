import { Meta, Story } from "@storybook/react";
import AuthenticationSignInFormWithCoverImage from "./index";

export default {
	component: AuthenticationSignInFormWithCoverImage,
} as Meta;

export const Primary: Story = (args) => (
	<AuthenticationSignInFormWithCoverImage {...args} />
);
Primary.args = {};
