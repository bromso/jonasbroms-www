import { Meta, Story } from "@storybook/react";
import AuthenticationSignUpFormWithCoverImage from "./index";

export default {
	component: AuthenticationSignUpFormWithCoverImage,
} as Meta;

export const Primary: Story = (args) => <AuthenticationSignUpFormWithCoverImage {...args} />;
Primary.args = {};
