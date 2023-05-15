import { Meta, Story } from "@storybook/react";
import WithAvatarAndButtonsBelow from "./index";

export default {
	component: WithAvatarAndButtonsBelow,
} as Meta;

export const Primary: Story = (args) => <WithAvatarAndButtonsBelow {...args} />;
Primary.args = {};
