import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { Main } from "layouts";
import { Container } from "components";

import {
	SimpleFeatures,
	HeroTyping,
	CaseStudies,
	CaseStudiesItem,
	About,
	AppStatsSimple,
	AppStatsSimpleItem,
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
						<CaseStudiesItem
							title="Lorem"
							subtitle="Ipsum"
							image="https://assets.maccarianagency.com/backgrounds/img1.jpg"
							authorName=""
							authorAvatar="https://assets.maccarianagency.com/backgrounds/img1.jpg"
							date="2023-04-23"
							image="https://assets.maccarianagency.com/backgrounds/img1.jpg"
						/>
					</CaseStudies>
				</Container>
				<Container>
					<About
						title="Lorem ipsum"
						subtitle="Dolor sit amet"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc."
						image="https://assets.maccarianagency.com/backgrounds/img1.jpg"
					/>
				</Container>
				<Container>
					<AppStatsSimple title="Lorem ipsum">
						<AppStatsSimpleItem title="Lorem ipsum" subtitle="Sit amet" />
						<AppStatsSimpleItem title="Lorem ipsum" subtitle="Sit amet" />
						<AppStatsSimpleItem title="Lorem ipsum" subtitle="Sit amet" />
					</AppStatsSimple>
				</Container>
				<Box
					sx={{
						backgroundImage: `linear-gradient(to bottom, ${alpha(
							theme.palette.background.paper,
							0
						)}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
						backgroundRepeat: "repeat-x",
						position: "relative",
					}}
				></Box>
			</Main>
		</Box>
	);
};

export default IndexView;
