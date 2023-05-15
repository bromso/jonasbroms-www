import { Meta, Story } from "@storybook/react";
import FullScreenHeroWithSubscriptionForm from "./index";

export default {
	component: FullScreenHeroWithSubscriptionForm,
} as Meta;

export const Primary: Story = (args) => (
	<FullScreenHeroWithSubscriptionForm {...args} />
);
Primary.args = {};
