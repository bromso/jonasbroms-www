import { Meta, Story } from "@storybook/react";
import SupportCenterCta from "./index";

export default {
	component: SupportCenterCta,
} as Meta;

export const Primary: Story = (args) => <SupportCenterCta {...args} />;
Primary.args = {};
