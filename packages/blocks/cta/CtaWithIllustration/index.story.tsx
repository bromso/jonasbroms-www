import { Meta, Story } from "@storybook/react";
import CtaWithIllustration from "./index";

export default {
	component: CtaWithIllustration,
} as Meta;

export const Primary: Story = (args) => <CtaWithIllustration {...args} />;
Primary.args = {};
