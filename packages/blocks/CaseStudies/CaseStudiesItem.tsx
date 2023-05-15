import React, { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

interface CaseStudiesItemProps {
	title?: ReactNode;
	subtitle?: ReactNode;
	image?: string;
	authorName?: ReactNode;
	authorAvatar?: string;
	date?: ReactNode;
	variant?: "primary" | "secondary";
}

export const CaseStudiesItem = ({
	title,
	subtitle,
	image,
	authorName,
	authorAvatar,
	date,
	variant = "primary",
}: CaseStudiesItemProps): JSX.Element => {
	const theme = useTheme();
	return (
		<Grid item xs={12}>
			<Box
				component={"a"}
				href={""}
				display={"block"}
				width={1}
				height={1}
				sx={{
					textDecoration: "none",
					transition: "all .2s ease-in-out",
					"&:hover": {
						transform: `translateY(-${theme.spacing(1 / 2)})`,
					},
				}}
			>
				<Box
					component={Card}
					width={1}
					height={1}
					boxShadow={4}
					display={"flex"}
					justifyContent={{
						xs: "center",
						md: variant === "primary" ? "flex-end" : "flex-start",
					}}
					sx={{
						minHeight: 300,
						backgroundImage: image && `url("${image}")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
						position: "relative",
						"&:after": {
							position: "absolute",
							content: '" "',
							width: "100%",
							height: "100%",
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
							zIndex: 1,
							background: "#161c2d",
							opacity: 0.6,
						},
					}}
				>
					<CardContent
						sx={{
							position: "relative",
							width: { xs: 1, md: "50%" },
							height: 1,
							padding: 4,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							zIndex: 2,
						}}
					>
						<Box>
							<Typography
								variant={"h5"}
								gutterBottom
								sx={{ color: "common.white" }}
							>
								{title}
							</Typography>
							<Typography
								color="text.secondary"
								sx={{ color: "common.white", opacity: 0.8 }}
							>
								{subtitle}
							</Typography>
						</Box>
						<Box>
							<Divider
								sx={{
									marginY: 2,
									borderColor: "common.white",
									opacity: 0.4,
								}}
							/>
							<Box
								display={"flex"}
								justifyContent={"space-between"}
								alignItems={"center"}
							>
								<Box display={"flex"} alignItems={"center"}>
									<Avatar src={authorAvatar} sx={{ marginRight: 1 }} />
									<Typography
										color={"text.secondary"}
										sx={{ color: "common.white", opacity: 0.8 }}
									>
										{authorName}
									</Typography>
								</Box>
								<Typography
									color={"text.secondary"}
									sx={{ color: "common.white", opacity: 0.8 }}
								>
									{date}
								</Typography>
							</Box>
						</Box>
					</CardContent>
				</Box>
			</Box>
		</Grid>
	);
};
