import React, { ReactNode } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface AboutProps {
	title?: ReactNode;
	subtitle?: ReactNode;
	description?: ReactNode;
	image?: string;
	imageAlt?: string;
}

export const About = ({
	title,
	subtitle,
	description,
	image,
	imageAlt,
}: AboutProps): JSX.Element => {
	const theme = useTheme();
	return (
		<Box>
			<Box marginBottom={4}>
				<Typography
					align={"center"}
					color={"text.secondary"}
					sx={{ textTransform: "uppercase" }}
					variant={"subtitle2"}
					fontWeight={600}
				>
					{title}
				</Typography>
				<Typography fontWeight={700} variant={"h4"} align={"center"}>
					{subtitle}
				</Typography>
			</Box>
			<Grid container spacing={4}>
				<Grid
					item
					container
					justifyContent={{ xs: "flex-start", md: "flex-end" }}
					xs={12}
					md={6}
				>
					<Typography color={"text.secondary"}>{description}</Typography>
				</Grid>
				<Grid item container xs={12} md={6}>
					<Typography color={"text.secondary"}>{description}</Typography>
				</Grid>
				<Grid
					item
					container
					xs={12}
					sx={{
						"& .lazy-load-image-background.lazy-load-image-loaded": {
							width: "100%",
							height: "100%",
						},
					}}
				>
					<Box
						component={LazyLoadImage}
						height={1}
						width={1}
						maxHeight={{ xs: 300, sm: 400, md: 520 }}
						borderRadius={2}
						src={image}
						alt={imageAlt}
						effect="blur"
						sx={{
							objectFit: "cover",
							filter:
								theme.palette.mode === "dark" ? "brightness(0.6)" : "none",
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};
