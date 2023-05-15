import { Meta, Story } from "@storybook/react";
import CtaAlignedLeftWithTypedText from "./index";

export default {
	component: CtaAlignedLeftWithTypedText,
} as Meta;

export const Primary: Story = (args) => (
	<CtaAlignedLeftWithTypedText {...args} />
);
Primary.args = {};
