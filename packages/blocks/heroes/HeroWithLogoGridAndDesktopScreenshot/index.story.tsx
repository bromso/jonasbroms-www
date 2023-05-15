import { Meta, Story } from "@storybook/react";
import HeroWithLogoGridAndDesktopScreenshot from "./index";

export default {
	component: HeroWithLogoGridAndDesktopScreenshot,
} as Meta;

export const Primary: Story = (args) => (
	<HeroWithLogoGridAndDesktopScreenshot {...args} />
);
Primary.args = {};
