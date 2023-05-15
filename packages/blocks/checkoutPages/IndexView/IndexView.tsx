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
						<Typography color="text.primary">Checkout Pages</Typography>
					</Breadcrumbs>
				</Container>
				<Container maxWidth={1500} paddingY={"0 !important"}>
					<Box>
						<Typography variant={"h4"} fontWeight={700}>
							Checkout Pages
						</Typography>
						<Typography>
							Collect payment information and delivery information to complete
							orders.
						</Typography>
					</Box>
				</Container>
				<ResizableFrame
					src={"/blocks/checkout-pages/with-two-columns"}
					title={"Checkout page with two columns"}
					path={
						"./src/blocks/checkoutPages/WithTwoColumns/WithTwoColumns.js|ts"
					}
				/>
			</Box>
		</Fluid>
	);
};

export default IndexView;
