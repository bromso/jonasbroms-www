import { Meta, Story } from "@storybook/react";
import FiltersWithDropdown from "./index";

export default {
	component: FiltersWithDropdown,
} as Meta;

export const Primary: Story = (args) => <FiltersWithDropdown {...args} />;
Primary.args = {};
