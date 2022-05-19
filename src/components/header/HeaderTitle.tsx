import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
	children: string;
};

const StyledDiv = styled.div`
	padding: 1%;
	padding-inline: 5%;
	background-color: aqua;
	font-size: 15px;
`;
const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;
const HeaderTitle: React.FC<Props> = (props) => {
	return (
		<StyledDiv>
			<StyledLink to="/">
				<h1>{props.children}</h1>
			</StyledLink>
		</StyledDiv>
	);
};

export default HeaderTitle;
