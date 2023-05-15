import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { Main } from "layouts";
import { Container } from "components";

import { Contact, Form, Hero, Newsletter } from "./components";

const ContactPage = (): JSX.Element => {
	const theme = useTheme();

	return (
		<Main>
			<Box
				sx={{
					position: "relative",
					backgroundColor: theme.palette.alternate.main,
					backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
					marginTop: -13,
					paddingTop: 13,
				}}
			>
				<Container>
					<Hero
						title="Contact us"
						subtitle="theFront will make your product look modern and professional while
              saving you precious time."
						image="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration6.svg"
					/>
				</Container>
			</Box>
			<Contact
				title="Contact details"
				subtitle="Rather than worrying about switching offices every couple years, you
						can instead stay in the same location and grow-up from your shared
						coworking space to an office that takes up an entire floor."
			/>
			<Box bgcolor={"alternate.main"}>
				<Container>
					<Form
						title="Can't find the answer you need?"
						subtitle="Keep track of what's happening with your data, change permissions, and
					run reports against your data anywhere in the world. Keep track of
					what's happening with your data, change permissions."
					/>
				</Container>
			</Box>
			<Container>
				<Newsletter
					title="Subscribe to our newsletter"
					subtitle="Don't lose a chance to be among the firsts to know about our
							upcoming news and updates."
				/>
			</Container>
		</Main>
	);
};

export default ContactPage;
