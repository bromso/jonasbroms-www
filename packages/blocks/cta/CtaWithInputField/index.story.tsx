import { Meta, Story } from "@storybook/react";
import CtaWithInputField from "./index";

export default {
	component: CtaWithInputField,
} as Meta;

export const Primary: Story = (args) => <CtaWithInputField {...args} />;
Primary.args = {};
