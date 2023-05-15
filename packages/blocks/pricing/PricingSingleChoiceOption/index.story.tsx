import { Meta, Story } from "@storybook/react";
import SingleChoiceOption from "./index";

export default {
	component: SingleChoiceOption,
} as Meta;

export const Primary: Story = (args) => <SingleChoiceOption {...args} />;
Primary.args = {};
