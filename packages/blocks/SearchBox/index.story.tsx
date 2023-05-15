import { Meta, Story } from "@storybook/react";
import SearchBox from "./index";

export default {
	component: SearchBox,
} as Meta;

export const Primary: Story = (args) => <SearchBox {...args} />;
Primary.args = {};
