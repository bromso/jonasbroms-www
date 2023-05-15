import { Meta, Story } from "@storybook/react";
import TeamWithCircledPhotos from "./index";

export default {
	component: TeamWithCircledPhotos,
} as Meta;

export const Primary: Story = (args) => <TeamWithCircledPhotos {...args} />;
Primary.args = {};
