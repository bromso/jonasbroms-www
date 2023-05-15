import { Meta, Story } from "@storybook/react";
import CtaWithAppStoreButtons from "./index";

export default {
	component: CtaWithAppStoreButtons,
} as Meta;

export const Primary: Story = (args) => <CtaWithAppStoreButtons {...args} />;
Primary.args = {};
