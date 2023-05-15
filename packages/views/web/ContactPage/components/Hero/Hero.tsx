/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface HeroProps {
	title: any;
	subtitle: any;
	image: any;
}

const Hero = ({ title, subtitle, image }: HeroProps): JSX.Element => {
	const theme = useTheme();

	return (
		<Grid container spacing={4}>
			<Grid item container alignItems={"center"} xs={12} md={6}>
				<Box>
					<Box marginBottom={2}>
						<Typography
							variant="h2"
							color="text.primary"
							sx={{
								fontWeight: 700,
							}}
						>
							{title}
						</Typography>
					</Box>
					<Box>
						<Typography
							variant="h6"
							component="p"
							color="text.secondary"
							sx={{ fontWeight: 400 }}
						>
							{subtitle}
						</Typography>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} md={6}>
				<Box
					height={1}
					width={1}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Box height={1} width={1} maxWidth={500}>
						<Box
							component={"img"}
							src={image}
							width={1}
							height={1}
							sx={{
								filter:
									theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
							}}
						/>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Hero;
