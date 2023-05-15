import { Meta, Story } from "@storybook/react";
import SimpleHeroWithImageAndCtaButtons from "./index";

export default {
	component: SimpleHeroWithImageAndCtaButtons,
} as Meta;

export const Primary: Story = (args) => (
	<SimpleHeroWithImageAndCtaButtons {...args} />
);
Primary.args = {};
