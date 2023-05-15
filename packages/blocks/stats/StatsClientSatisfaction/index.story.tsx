import { Meta, Story } from "@storybook/react";
import ClientSatisfaction from "./index";

export default {
	component: ClientSatisfaction,
} as Meta;

export const Primary: Story = (args) => <ClientSatisfaction {...args} />;
Primary.args = {};
