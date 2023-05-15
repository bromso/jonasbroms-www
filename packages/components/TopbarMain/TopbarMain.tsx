import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import { NavItem } from "./components";

interface Props {
	// eslint-disable-next-line @typescript-eslint/ban-types
	onSidebarOpen: () => void;
	pages: {
		landings: Array<PageItem>;
		company: Array<PageItem>;
		secondary: Array<PageItem>;
		blog: Array<PageItem>;
	};
	colorInvert?: boolean;
}

const TopbarMain = ({
	onSidebarOpen,
	pages,
	colorInvert = false,
}: Props): JSX.Element => {
	const theme = useTheme();
	const { mode } = theme.palette;
	const {
		landings: landingPages,
		secondary: secondaryPages,
		company: companyPages,
		blog: blogPages,
	} = pages;

	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			alignItems={"center"}
			width={1}
		>
			<Box
				display={"flex"}
				component="a"
				href="/"
				title="theFront"
				width={{ xs: 100, md: 120 }}
			>
				<Box
					component={"img"}
					src={
						mode === "light" && !colorInvert
							? "https://assets.maccarianagency.com/the-front/logos/logo.svg"
							: "https://assets.maccarianagency.com/the-front/logos/logo-negative.svg"
					}
					height={1}
					width={1}
				/>
			</Box>
			<Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
				<Box>
					<NavItem
						title={"Landings"}
						id={"landing-pages"}
						items={landingPages}
						colorInvert={colorInvert}
					/>
				</Box>
				<Box marginLeft={4}>
					<NavItem
						title={"Company"}
						id={"company-pages"}
						items={companyPages}
						colorInvert={colorInvert}
					/>
				</Box>
				<Box marginLeft={4}>
					<NavItem
						title={"Pages"}
						id={"secondary-pages"}
						items={secondaryPages}
						colorInvert={colorInvert}
					/>
				</Box>
				<Box marginLeft={4}>
					<NavItem
						title={"Blog"}
						id={"blog-pages"}
						items={blogPages}
						colorInvert={colorInvert}
					/>
				</Box>
			</Box>
			<Box sx={{ display: { xs: "flex", md: "none" } }} alignItems={"center"}>
				<Button
					onClick={() => onSidebarOpen()}
					aria-label="Menu"
					variant={"outlined"}
					sx={{
						borderRadius: 2,
						minWidth: "auto",
						padding: 1,
						borderColor: alpha(theme.palette.divider, 0.2),
					}}
				>
					<MenuIcon />
				</Button>
			</Box>
		</Box>
	);
};

export default TopbarMain;
