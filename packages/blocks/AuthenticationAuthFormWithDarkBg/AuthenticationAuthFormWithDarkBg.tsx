import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTheme } from "@mui/material/styles";

import { Container } from "components";

import { Headline, Form } from "./components";

interface AAAProps {
	title: any;
	subtitle: any;
	description: any;
	items: Array<{
		label: any;
		value: any;
		icon: any;
	}>;
}

const AuthenticationAuthFormWithDarkBg = ({
	title,
	subtitle,
	description,
}: AuthenticationAuthFormWithDarkBgProps): JSX.Element => {
	const theme = useTheme();

	return (
		<Box
			minHeight={300}
			height={"auto"}
			position={"relative"}
			sx={{
				backgroundColor: theme.palette.alternate.main,
				background:
					"url(https://assets.maccarianagency.com/backgrounds/img19.jpg) no-repeat center",
				backgroundSize: "cover",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: 1,
					height: 1,
					backgroundColor: theme.palette.primary.main,
					backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
					opacity: "0.8",
					zIndex: 1,
				}}
			/>
			<Container position={"relative"} zIndex={2}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<Box width={1} height="100%" display="flex" alignItems="center">
							<Headline
								title="Join the world's leading companies at TheFront 2021"
								subtitle="Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something
				about TheFront works for our global partners.
				<br />
				Want more information? Download our overview and a member of our
				specialist team will be in touch to talk about your goals for TheFront
				2021."
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box width={1} height="100%" display="flex" alignItems="center">
							<Form />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default AuthenticationAuthFormWithDarkBg;
