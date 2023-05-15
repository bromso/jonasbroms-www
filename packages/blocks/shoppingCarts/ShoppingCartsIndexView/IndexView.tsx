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
						<Typography color="text.primary">Shopping Carts</Typography>
					</Breadcrumbs>
				</Container>
				<Container maxWidth={1500} paddingY={"0 !important"}>
					<Box>
						<Typography variant={"h4"} fontWeight={700}>
							Shopping Carts
						</Typography>
						<Typography>
							Used to display products added to the store shopping cart.
						</Typography>
					</Box>
				</Container>
				<ResizableFrame
					src={"/blocks/shopping-carts/cart-with-order-summery"}
					title={"Cart with order summary box"}
					path={
						"./src/blocks/shoppingCarts/CartWithOrderSummery/CartWithOrderSummery.js|ts"
					}
				/>
				<ResizableFrame
					src={"/blocks/shopping-carts/empty-cart"}
					title={"Empty cart"}
					path={"./src/blocks/shoppingCarts/EmptyCart/EmptyCart.js|ts"}
				/>
			</Box>
		</Fluid>
	);
};

export default IndexView;
