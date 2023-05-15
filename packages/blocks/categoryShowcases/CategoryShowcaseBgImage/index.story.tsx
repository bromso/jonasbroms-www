import { Meta, Story } from "@storybook/react";
import ShowcaseBgImage from "./index";

export default {
	component: ShowcaseBgImage,
} as Meta;

export const Primary: Story = (args) => <ShowcaseBgImage {...args} />;
Primary.args = {};
