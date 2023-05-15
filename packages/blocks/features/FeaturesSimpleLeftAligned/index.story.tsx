import { Meta, Story } from "@storybook/react";
import SimpleLeftAligned from "./index";

export default {
	component: SimpleLeftAligned,
} as Meta;

export const Primary: Story = (args) => <SimpleLeftAligned {...args} />;
Primary.args = {};
