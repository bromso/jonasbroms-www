import React from "react";
import Box from "@mui/material/Box";

import { Main } from "layouts";
import { Container } from "components";

import { Main as MainSection, Newsletter } from "./components";

import { JobApplication } from "blocks";

const CareerOpening = (): JSX.Element => {
	return (
		<Main>
			<Container>
				<MainSection />
			</Container>
			<Box bgcolor={"alternate.main"}>
				<Container>
					<JobApplication />
				</Container>
			</Box>
			<Container>
				<Newsletter />
			</Container>
		</Main>
	);
};

export default CareerOpening;
