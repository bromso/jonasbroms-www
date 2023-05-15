import { Meta, Story } from "@storybook/react";
import LogoGridSimpleCentered from "./index";

export default {
	component: LogoGridSimpleCentered,
} as Meta;

export const Primary: Story = (args) => <LogoGridSimpleCentered {...args} />;
Primary.args = {};
