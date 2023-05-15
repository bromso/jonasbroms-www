/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface HeadlineProps {
	title: any;
	subtitle: any;
}

const Headline = ({ title, subtitle }: headline): JSX.Element => {
	return (
		<Box>
			<Typography
				variant="h3"
				gutterBottom
				sx={{
					fontWeight: 900,
					color: "common.white",
				}}
			>
				{title}
			</Typography>
			<Typography
				variant="h6"
				component="p"
				color="text.primary"
				sx={{
					fontWeight: 500,
					color: "common.white",
				}}
			>
				{subtitle}
			</Typography>
		</Box>
	);
};

export default Headline;
