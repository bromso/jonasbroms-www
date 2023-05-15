import { Meta, Story } from "@storybook/react";
import SimpleHeroWithCta from "./index";

export default {
	component: SimpleHeroWithCta,
} as Meta;

export const Primary: Story = (args) => <SimpleHeroWithCta {...args} />;
Primary.args = {};
