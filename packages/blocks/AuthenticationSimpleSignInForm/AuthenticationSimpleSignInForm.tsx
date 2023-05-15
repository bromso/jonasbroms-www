/* eslint-disable react/no-unescaped-entities */

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { Container } from "components";

interface AuthenticationSimpleSignInFormProps {
	title: any;
	subtitle: any;
	description: any;
	caption: any;
	items: Array<{
		label: any;
		value: any;
		icon: any;
	}>;
}

const AuthenticationSimpleSignInForm = ({
	title,
	subtitle,
	description,
	caption,
}: AuthenticationSimpleSignInFormProps): JSX.Element => {
	return (
		<Box bgcolor={"alternate.main"}>
			<Container maxWidth={800}>
				<Box marginBottom={4}>
					<Typography
						sx={{
							textTransform: "uppercase",
						}}
						gutterBottom
						color={"text.secondary"}
						fontWeight={700}
					>
						{title}
					</Typography>
					<Typography
						variant="h4"
						sx={{
							fontWeight: 700,
						}}
					>
						{subtitle}
					</Typography>
					<Typography color="text.secondary">{description}</Typography>
				</Box>
				<Card sx={{ p: { xs: 4, md: 6 } }}>
					<form>
						<Grid container spacing={4}>
							<Grid item xs={12}>
								<Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
									Enter your email
								</Typography>
								<TextField
									label="Email *"
									variant="outlined"
									name={"email"}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<Box
									display="flex"
									flexDirection={{ xs: "column", sm: "row" }}
									alignItems={{ xs: "stretched", sm: "center" }}
									justifyContent={"space-between"}
									width={1}
									marginBottom={2}
								>
									<Box marginBottom={{ xs: 1, sm: 0 }}>
										<Typography variant={"subtitle2"}>
											Enter your password
										</Typography>
									</Box>
									<Typography variant={"subtitle2"}>
										<Link
											component={"a"}
											color={"primary"}
											href={"#"}
											underline={"none"}
										>
											Forgot your password?
										</Link>
									</Typography>
								</Box>
								<TextField
									label="Password *"
									variant="outlined"
									name={"password"}
									type={"password"}
									fullWidth
								/>
							</Grid>
							<Grid item container xs={12}>
								<Box
									display="flex"
									flexDirection={{ xs: "column", sm: "row" }}
									alignItems={{ xs: "stretched", sm: "center" }}
									justifyContent={"space-between"}
									width={1}
									maxWidth={600}
									margin={"0 auto"}
								>
									<Box marginBottom={{ xs: 1, sm: 0 }}>
										<Typography variant={"subtitle2"}>
											{caption}{" "}
											<Link
												component={"a"}
												color={"primary"}
												href={"#"}
												underline={"none"}
											>
												Sign up here.
											</Link>
										</Typography>
									</Box>
									<Button size={"large"} variant={"contained"} type={"submit"}>
										Login
									</Button>
								</Box>
							</Grid>
						</Grid>
					</form>
				</Card>
			</Container>
		</Box>
	);
};

export default AuthenticationSimpleSignInForm;
