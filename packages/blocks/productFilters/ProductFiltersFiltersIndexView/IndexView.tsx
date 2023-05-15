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
						<Typography color="text.primary">Product Filters</Typography>
					</Breadcrumbs>
				</Container>
				<Container maxWidth={1500} paddingY={"0 !important"}>
					<Box>
						<Typography variant={"h4"} fontWeight={700}>
							Product Filters
						</Typography>
						<Typography>
							Common product filter patterns used to narrow down product list.
						</Typography>
					</Box>
				</Container>
				<ResizableFrame
					src={"/blocks/product-filters/filters-with-dropdown"}
					title={"Filters with dropdown"}
					path={
						"./src/blocks/productFilters/FiltersWithDropdown/FiltersWithDropdown.js|ts"
					}
				/>
				<ResizableFrame
					src={"/blocks/product-filters/filters-with-sidebar"}
					title={"Filters with sidebar"}
					path={
						"./src/blocks/productFilters/FiltersWithSidebar/FiltersWithSidebar.js|ts"
					}
				/>
			</Box>
		</Fluid>
	);
};

export default IndexView;
