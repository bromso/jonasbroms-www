import { Meta, Story } from "@storybook/react";
import BannersSimpleSnackBar from "./index";

export default {
	component: BannersSimpleSnackBar,
} as Meta;

export const Primary: Story = (args) => <BannersSimpleSnackBar {...args} />;
Primary.args = {};
