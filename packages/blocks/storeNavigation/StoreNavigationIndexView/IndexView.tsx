/* eslint-disable react/no-unescaped-entities */

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { Fluid } from "layouts";
import { Container } from "components";
import { ResizableFrame } from "components";

const IndexView = (): JSX.Element => {
	return (
		<Fluid>
			<Box bgcolor={"alternate.main"}>
				<Container maxWidth={1500} paddingBottom={"16px !important"}>
					<Breadcrumbs aria-label="breadcrumb">
						<Link underline="hover" color="inherit" href="/blocks">
							Components
						</Link>
						<Link
							underline="hover"
							color="inherit"
							href="/blocks#js--blocks__index-section--e-commerce"
						>
							E-commerce
						</Link>
						<Typography color="text.primary">Store Navigation</Typography>
					</Breadcrumbs>
				</Container>
				<Container maxWidth={1500} paddingY={"0 !important"}>
					<Box>
						<Typography variant={"h4"} fontWeight={700}>
							Store Navigation
						</Typography>
						<Typography>Common navigation patterns for your store.</Typography>
					</Box>
				</Container>
				<ResizableFrame
					src={"/blocks/store-navigation/nav-with-centered-search"}
					title={"Nav with centered search"}
					path={
						"./src/blocks/storeNavigation/NavWithCenteredSearch/NavWithCenteredSearch.js|ts"
					}
				/>
			</Box>
		</Fluid>
	);
};

export default IndexView;
