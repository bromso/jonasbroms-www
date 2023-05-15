import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

interface AppStatsSimpleItemProps {
	title: ReactNode;
	subtitle: ReactNode;
}

export const AppStatsSimpleItem = ({
	title,
	subtitle,
}: AppStatsSimpleItemProps): JSX.Element => {
	return (
		<>
			<Grid item xs={12} sm={4}>
				<Card sx={{ p: { xs: 2, md: 4 } }}>
					<Typography color={"text.secondary"} gutterBottom>
						{title}
					</Typography>
					<Typography variant={"h4"} color={"text.primary"} fontWeight={700}>
						{subtitle}
					</Typography>
				</Card>
			</Grid>
		</>
	);
};
