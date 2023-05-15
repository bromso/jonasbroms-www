import { Meta, Story } from "@storybook/react";
import Services from "./index";

export default {
	component: Services,
} as Meta;

export const Primary: Story = (args) => <Services {...args} />;
Primary.args = {};
