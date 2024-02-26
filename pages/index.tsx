import * as React from "react";
import { Container } from "@/components/Container";
import { TypographyH1 } from "@/components/TypographyH1";
import { TypographyP } from "@/components/TypographyP";
import { Logotype } from "@/components/Logotype";
import { BackgroundGradientAnimation } from "@/components/BackgroundGradientAnimation";
import { BackgroundBeams } from "@/components/BackgroundBeams";

export function Home() {
	return (
		<Container>
			<BackgroundGradientAnimation>
			<div className="flex items-center justify-center h-screen">
				<div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
					<div className="relative">
						<div className="p-4 max-w-7xl w-full pt-12 md:pt-0 flex flex-col items-center justify-center">
							<Logotype />
							<TypographyH1>Odduse</TypographyH1>
							<TypographyP>Discover. Design. Develop. Deploy.</TypographyP>
						</div>
						<div className="p-4 max-w-7xl w-full pt-2 md:pt-0 flex flex-col items-center justify-center">
							<TypographyP>
								<a href="wwww.example.com">Contact us</a>
							</TypographyP>
						</div>
					</div>
				</div>
			</div>
			</BackgroundGradientAnimation>
			<BackgroundBeams />
		</Container>
	);
}

export default Home;
