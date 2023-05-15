import { Meta, Story } from "@storybook/react";
import NavWithCenteredSearch from "./index";

export default {
	component: NavWithCenteredSearch,
} as Meta;

export const Primary: Story = (args) => <NavWithCenteredSearch {...args} />;
Primary.args = {};
