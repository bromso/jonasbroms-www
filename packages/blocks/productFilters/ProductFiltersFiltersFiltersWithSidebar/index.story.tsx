import { Meta, Story } from "@storybook/react";
import FiltersWithSidebar from "./index";

export default {
	component: FiltersWithSidebar,
} as Meta;

export const Primary: Story = (args) => <FiltersWithSidebar {...args} />;
Primary.args = {};
