import { Meta, Story } from "@storybook/react";
import CtaWithCoverImage from "./index";

export default {
	component: CtaWithCoverImage,
} as Meta;

export const Primary: Story = (args) => <CtaWithCoverImage {...args} />;
Primary.args = {};
