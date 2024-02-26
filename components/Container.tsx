import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export const Container = (props: any) => {
	const { children, className, ...customMeta } = props;
	const router = useRouter();

	const title = "Odduse - Discover. Design. Develop. Deploy.";
	const meta = {
		title,
		description: `Odduse is a Digital Production company.`,
		type: "website",
		image: "https://www.odduse.com/banner.png",
		...customMeta,
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta
					property="og:url"
					content={`https://www.odduse.com${router.asPath}`}
				/>
				<link rel="canonical" href={`https://www.odduse.com${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta
					property="og:site_name"
					content="Discover. Design. Develop. Deploy"
				/>
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@youragency" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
				{meta.date && (
					<meta property="article:published_time" content={meta.date} />
				)}
			</Head>
			<main className={clsx("bg-white min-h-screen antialiased", className)}>
				{children}
			</main>
		</>
	);
};
