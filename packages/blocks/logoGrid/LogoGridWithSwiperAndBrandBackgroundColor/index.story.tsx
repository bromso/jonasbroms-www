import { Meta, Story } from "@storybook/react";
import WithSwiperAndBrandBackgroundColor from "./index";

export default {
	component: WithSwiperAndBrandBackgroundColor,
} as Meta;

export const Primary: Story = (args) => (
	<WithSwiperAndBrandBackgroundColor {...args} />
);
Primary.args = {};
