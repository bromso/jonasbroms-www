import React from "react";
import { Main } from "layouts";
import { Container } from "components";

interface ServerErrorProps {
	title: any;
}

const ServerError = ({ title }: ServerErrorProps): JSX.Element => {
	title = "ServerError";
	return (
		<Main>
			<Container>{title}</Container>
		</Main>
	);
};

export default ServerError;
