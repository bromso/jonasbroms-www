import { Meta, Story } from "@storybook/react";
import SimpleSignUpForm from "./index";

export default {
	component: SimpleSignUpForm,
} as Meta;

export const Primary: Story = (args) => <SimpleSignUpForm {...args} />;
Primary.args = {};
