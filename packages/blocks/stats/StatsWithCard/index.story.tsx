import { Meta, Story } from "@storybook/react";
import StatsWithCard from "./index";

export default {
	component: StatsWithCard,
} as Meta;

export const Primary: Story = (args) => <StatsWithCard {...args} />;
Primary.args = {};
