import { Meta, Story } from "@storybook/react";
import FullScreenHeroWithPromoImagesAndTypedText from "./index";

export default {
	component: FullScreenHeroWithPromoImagesAndTypedText,
} as Meta;

export const Primary: Story = (args) => (
	<FullScreenHeroWithPromoImagesAndTypedText {...args} />
);
Primary.args = {};
