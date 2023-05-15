import { Meta, Story } from "@storybook/react";
import WithCompanyLogo from "./index";

export default {
	component: WithCompanyLogo,
} as Meta;

export const Primary: Story = (args) => <WithCompanyLogo {...args} />;
Primary.args = {};
