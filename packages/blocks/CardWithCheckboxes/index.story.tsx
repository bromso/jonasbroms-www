import { Meta, Story } from "@storybook/react";
import CardWithCheckboxes from "./index";

export default {
	component: CardWithCheckboxes,
} as Meta;

export const Primary: Story = (args) => <CardWithCheckboxes {...args} />;
Primary.args = {};
