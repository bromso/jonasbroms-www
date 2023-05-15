import { Meta, Story } from "@storybook/react";
import BannersMUIStandardSnackBars from "./index";

export default {
	component: BannersMUIStandardSnackBars,
} as Meta;

export const Primary: Story = (args) => <MUIStandardSnackBars {...args} />;
Primary.args = {};
