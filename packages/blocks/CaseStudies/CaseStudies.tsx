import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface CaseStudiesProps {
	title?: ReactNode;
	subtitle?: ReactNode;
	children?: ReactNode;
}

export const CaseStudies = ({
	title,
	subtitle,
	children,
}: CaseStudiesProps): JSX.Element => {
	return (
		<Box>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={{ xs: "flex-start", sm: "center" }}
				flexDirection={{ xs: "column", sm: "row" }}
				marginBottom={4}
			>
				<Box>
					<Typography fontWeight={700} variant={"h6"} gutterBottom>
						{title}
					</Typography>
					<Typography color={"text.secondary"}>{subtitle}</Typography>
				</Box>
				<Box display="flex" marginTop={{ xs: 2, md: 0 }}>
					<Button variant="outlined">View all</Button>
				</Box>
			</Box>
			<Grid container spacing={4}>
				{children}
			</Grid>
		</Box>
	);
};
