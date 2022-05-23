import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Result: React.FC = () => {
	return (
		<Article>
			<h2>Result</h2>
			<StdLink to="/">Back to Form</StdLink>
		</Article>
	);
};
const Article = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin: 0;
	& h2 {
		margin: 1em 0;
	}
`;
const StdLink = styled(Link)`
	text-decoration: none;
	color: blue;
`;

export default Result;
