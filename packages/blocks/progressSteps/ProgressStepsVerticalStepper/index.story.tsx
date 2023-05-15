import { Meta, Story } from "@storybook/react";
import VerticalStepper from "./index";

export default {
	component: VerticalStepper,
} as Meta;

export const Primary: Story = (args) => <VerticalStepper {...args} />;
Primary.args = {};
