import { Meta, Story } from "@storybook/react";
import HeroWithBackgroundVideo from "./index";

export default {
	component: HeroWithBackgroundVideo,
} as Meta;

export const Primary: Story = (args) => <HeroWithBackgroundVideo {...args} />;
Primary.args = {};
