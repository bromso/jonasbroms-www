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
						<Typography color="text.primary">Category Showcases</Typography>
					</Breadcrumbs>
				</Container>
				<Container maxWidth={1500} paddingY={"0 !important"}>
					<Box>
						<Typography variant={"h4"} fontWeight={700}>
							Category Showcases
						</Typography>
						<Typography>
							Used to showcase a category of products in your store.
						</Typography>
					</Box>
				</Container>
				<ResizableFrame
					src={"/blocks/category-showcases/with-image-grid"}
					title={"Showcase with image grid"}
					path={
						"./src/blocks/categoryShowcases/WithImageGrid/WithImageGrid.js|ts"
					}
				/>
				<ResizableFrame
					src={"/blocks/category-showcases/on-spanning-columns"}
					title={"Category showcase on spanning columns"}
					path={
						"./src/blocks/categoryShowcases/SpanningColumns/SpanningColumns.js|ts"
					}
				/>
				<ResizableFrame
					src={"/blocks/category-showcases/showcase-grid"}
					title={"Showcase grid"}
					path={
						"./src/blocks/categoryShowcases/ShowcaseGrid/ShowcaseGrid.js|ts"
					}
				/>
				<ResizableFrame
					src={"/blocks/category-showcases/showcase-bg-image"}
					title={"Showcase on background image"}
					path={
						"./src/blocks/categoryShowcases/ShowcaseBgImage/ShowcaseBgImage.js|ts"
					}
				/>
			</Box>
		</Fluid>
	);
};

export default IndexView;
