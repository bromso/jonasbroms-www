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
						<Typography color="text.primary">Store Popups</Typography>
					</Breadcrumbs>
				</Container>
				<Container maxWidth={1500} paddingY={"0 !important"}>
					<Box>
						<Typography variant={"h4"} fontWeight={700}>
							Store Popups
						</Typography>
						<Typography>
							Common marketing popups to incentivize store visitors.
						</Typography>
					</Box>
				</Container>
				<ResizableFrame
					src={"/blocks/store-popups/popup-with-discount"}
					title={"Popup with discount"}
					path={
						"./src/blocks/storePopups/PopupWithDiscount/PopupWithDiscount.js|ts"
					}
					iframeStyles={{ minHeight: 800 }}
				/>
				<ResizableFrame
					src={"/blocks/store-popups/popup-with-image"}
					title={"Popup with image"}
					path={"./src/blocks/storePopups/PopupWithImage/PopupWithImage.js|ts"}
					iframeStyles={{ minHeight: 800 }}
				/>
			</Box>
		</Fluid>
	);
};

export default IndexView;
