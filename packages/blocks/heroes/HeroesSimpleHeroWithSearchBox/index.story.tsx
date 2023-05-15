import { Meta, Story } from "@storybook/react";
import SimpleHeroWithSearchBox from "./index";

export default {
	component: SimpleHeroWithSearchBox,
} as Meta;

export const Primary: Story = (args) => <SimpleHeroWithSearchBox {...args} />;
Primary.args = {};
