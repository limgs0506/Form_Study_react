import React from "react";
import styled from "styled-components";
import RegistForm from "./registForm";

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

type Props = {
	postTitle: string;
};

const SignUpArticle: React.FC<Props> = (props) => {
	return (
		<Article>
			<h2 id="h2">{props.postTitle}</h2>
			<RegistForm />
		</Article>
	);
};

export default SignUpArticle;
