import { Meta, Story } from "@storybook/react";
import CtaWithRightAppStoreButtons from "./index";

export default {
	component: CtaWithRightAppStoreButtons,
} as Meta;

export const Primary: Story = (args) => (
	<CtaWithRightAppStoreButtons {...args} />
);
Primary.args = {};
