import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Container } from "components";

interface AppStatsSimpleProps {
	title: ReactNode;
	children: ReactNode;
}

export const AppStatsSimple = ({
	title,
	children,
}: AppStatsSimpleProps): JSX.Element => {
	return (
		<Box bgcolor={"alternate.main"}>
			<Container>
				<Box marginBottom={2}>
					<Typography fontWeight={700}>{title}</Typography>
				</Box>
				<Grid container spacing={{ xs: 2, md: 4 }}>
					{children}
				</Grid>
			</Container>
		</Box>
	);
};
