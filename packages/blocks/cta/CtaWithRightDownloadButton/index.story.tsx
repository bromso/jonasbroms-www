import { Meta, Story } from "@storybook/react";
import CtaWithRightDownloadButton from "./index";

export default {
	component: CtaWithRightDownloadButton,
} as Meta;

export const Primary: Story = (args) => (
	<CtaWithRightDownloadButton {...args} />
);
Primary.args = {};
