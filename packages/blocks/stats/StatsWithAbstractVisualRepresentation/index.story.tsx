import { Meta, Story } from "@storybook/react";
import WithAbstractVisualRepresentation from "./index";

export default {
	component: WithAbstractVisualRepresentation,
} as Meta;

export const Primary: Story = (args) => (
	<WithAbstractVisualRepresentation {...args} />
);
Primary.args = {};
