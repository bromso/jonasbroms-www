import { Meta, Story } from "@storybook/react";
import CtaSimpleCentered from "./index";

export default {
	component: CtaSimpleCentered,
} as Meta;

export const Primary: Story = (args) => <CtaSimpleCentered {...args} />;
Primary.args = {};
