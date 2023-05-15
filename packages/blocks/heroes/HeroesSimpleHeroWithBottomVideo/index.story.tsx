import { Meta, Story } from "@storybook/react";
import SimpleHeroWithBottomVideo from "./index";

export default {
	component: SimpleHeroWithBottomVideo,
} as Meta;

export const Primary: Story = (args) => <SimpleHeroWithBottomVideo {...args} />;
Primary.args = {};
