import { Meta, Story } from "@storybook/react";
import FeaturesWithMinimalDesign from "./index";

export default {
	component: FeaturesWithMinimalDesign,
} as Meta;

export const Primary: Story = (args) => <FeaturesWithMinimalDesign {...args} />;
Primary.args = {};
