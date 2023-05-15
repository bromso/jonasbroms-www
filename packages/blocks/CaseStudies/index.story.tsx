import { Meta, Story } from "@storybook/react";
import CaseStudies from "./index";

const mock = [
	{
		image: "https://assets.maccarianagency.com/backgrounds/img2.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		title: "Lorem ipsum dolor sit amet,",
		author: {
			name: "Clara Bertoletti",
			avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
		},
		date: "04 Aug",
	},
	{
		image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		title: "Consectetur adipiscing elit",
		author: {
			name: "Jhon Anderson",
			avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
		},
		date: "12 Sep",
	},
	{
		image: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		title: "Consectetur adipiscing elit",
		author: {
			name: "Jhon Anderson",
			avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
		},
		date: "12 Sep",
	},
];

export default {
	component: CaseStudies,
} as Meta;

export const Primary: Story = (args) => <CaseStudies {...args} />;
Primary.args = {};
