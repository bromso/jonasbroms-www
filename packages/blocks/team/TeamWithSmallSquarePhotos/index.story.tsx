import { Meta, Story } from "@storybook/react";
import TeamWithSmallSquarePhotos from "./index";

export default {
	component: TeamWithSmallSquarePhotos,
} as Meta;

export const Primary: Story = (args) => <TeamWithSmallSquarePhotos {...args} />;
Primary.args = {};
