import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { Main } from "layouts";
import { Container } from "components";

import { SimpleFeatures, HeroTyping } from "blocks";

import {
	Benefits,
	GetStarted,
	Services,
	QuickStart,
	BlogVerticallyAlignedBlogCardsWithShapedImage,
	BlogCardsWithFullBackgroundImage,
	BlogVerticalMinimalDesignedBlogCards,
	CardWithColorAccent,
	CaseStudies,
	CaseStudiesItem,
} from "blocks";

const IndexView = (): JSX.Element => {
	const theme = useTheme();
	return (
		<Box sx={{ overflowX: "hidden" }}>
			<Main bgcolor={"background.paper"}>
				<HeroTyping
					title="Turn your ideas"
					subtitle="theFront will make your product look modern and professional while saving you precious time."
				/>
				<Container>
					<CaseStudies title="Test" subtitle="Testar mera">
						<CaseStudiesItem />
					</CaseStudies>
					<Services
						title="Build accessible React apps with speed"
						subtitle="Build a beautiful, modern website with flexible, fully customizable,
            atomic MUI components."
					/>
				</Container>
				<BlogVerticallyAlignedBlogCardsWithShapedImage />
				<Box
					sx={{
						backgroundImage: `linear-gradient(to bottom, ${alpha(
							theme.palette.background.paper,
							0
						)}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
						backgroundRepeat: "repeat-x",
						position: "relative",
					}}
				>
					<Container maxWidth={600}>
						<QuickStart
							title="Build tools and full documention"
							subtitle="Components, plugins, and build tools are all thoroughly documented
						with live examples and markup for easier use and customization."
							description={`
> $ yarn install
// Or
> $ npm install

// Everything installed!


> $ yarn start
// Or
> $ npm run start

// LiveReload started. Opening localhost:3000

`}
						/>
					</Container>
					<Container>
						<SimpleFeatures
							title="The powerful and flexible theme for all kinds of businesses"
							subtitle="Whether you're creating a subscription service, an on-demand marketplace, an e-commerce store, or a portfolio showcase, theFront helps you create the best possible product for your users."
						/>
					</Container>
					<Container>
						<Benefits />
					</Container>
				</Box>
				<Container>
					<GetStarted
						title="Get started with theFront today"
						subtitle="Build a beautiful, modern website with flexible, fully customizable, atomic MUI components."
					/>
				</Container>
			</Main>
		</Box>
	);
};

export default IndexView;
