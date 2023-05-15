/* eslint-disable react/no-unescaped-entities */

import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface QuickstartProps {
	title: any;
	subtitle: any;
	description: any;
}

const QuickStart = ({
	title,
	subtitle,
	description,
}: Quickstart): JSX.Element => {
	const theme = useTheme();
	return (
		<Box>
			<Box marginBottom={4}>
				<Box marginBottom={2}>
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
				</Box>
			</Box>
			<Box
				component={SyntaxHighlighter}
				language={"javascript"}
				style={vs2015}
				padding={`${theme.spacing(2)} !important`}
				borderRadius={2}
				margin={`${theme.spacing(0)} !important`}
				bgcolor={"#21325b !important"}
			>
				{description}
			</Box>
		</Box>
	);
};

export default QuickStart;
