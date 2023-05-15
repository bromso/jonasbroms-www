import { Meta, Story } from "@storybook/react";
import WithCountUpNumbersAndMap from "./index";

export default {
	component: WithCountUpNumbersAndMap,
} as Meta;

export const Primary: Story = (args) => <WithCountUpNumbersAndMap {...args} />;
Primary.args = {};
