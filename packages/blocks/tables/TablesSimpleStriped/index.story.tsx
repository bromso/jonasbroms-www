import { Meta, Story } from "@storybook/react";
import SimpleStriped from "./index";

export default {
	component: SimpleStriped,
} as Meta;

export const Primary: Story = (args) => <SimpleStriped {...args} />;
Primary.args = {};
