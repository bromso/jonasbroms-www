import { Meta, Story } from "@storybook/react";
import CompanyValues from "./index";

export default {
	component: CompanyValues,
} as Meta;

export const Primary: Story = (args) => <CompanyValues {...args} />;
Primary.args = {};
