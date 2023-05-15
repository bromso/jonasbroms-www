import { Meta, Story } from "@storybook/react";
import WithLargeImagesAndSocialIcons from "./index";

export default {
	component: WithLargeImagesAndSocialIcons,
} as Meta;

export const Primary: Story = (args) => (
	<WithLargeImagesAndSocialIcons {...args} />
);
Primary.args = {};
