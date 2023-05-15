import { Meta, Story } from "@storybook/react";
import ShowcaseGrid from "./index";

export default {
	component: ShowcaseGrid,
} as Meta;

export const Primary: Story = (args) => <ShowcaseGrid {...args} />;
Primary.args = {};
