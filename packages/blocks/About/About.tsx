import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface AboutProps {
	title: any;
	subtitle: any;
	description: any;
}

const About = ({ title, subtitle, description }: AboutProps): JSX.Element => {
	const theme = useTheme();

	title = "About";
	subtitle = "About our company";
	description =
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
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
						src={"https://assets.maccarianagency.com/backgrounds/img1.jpg"}
						alt="..."
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

export default About;
