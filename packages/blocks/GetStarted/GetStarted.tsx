import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface GetStartedProps {
	title: any;
	subtitle: any;
}

const GetStarted = ({ title, subtitle }: GetStartedProps): JSX.Element => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up("md"), {
		defaultMatches: true,
	});

	return (
		<React.Fragment>
			<Typography
				variant="h4"
				color="text.primary"
				align={"center"}
				gutterBottom
				sx={{
					fontWeight: 700,
				}}
			>
				{title}
			</Typography>
			<Typography
				variant="h6"
				component="p"
				color="text.secondary"
				sx={{ fontWeight: 400 }}
				align={"center"}
			>
				{subtitle}
			</Typography>
			<Box
				display="flex"
				flexDirection={{ xs: "column", sm: "row" }}
				alignItems={{ xs: "stretched", sm: "flex-start" }}
				justifyContent={"center"}
				marginTop={4}
			>
				<Button
					component={"a"}
					variant="contained"
					color="primary"
					size="large"
					fullWidth={isMd ? false : true}
					href={"/home"}
				>
					View pages
				</Button>
			</Box>
		</React.Fragment>
	);
};

export default GetStarted;
