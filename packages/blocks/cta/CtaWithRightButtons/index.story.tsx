import { Meta, Story } from "@storybook/react";
import CtaWithRightButtons from "./index";

export default {
	component: CtaWithRightButtons,
} as Meta;

export const Primary: Story = (args) => <CtaWithRightButtons {...args} />;
Primary.args = {};
