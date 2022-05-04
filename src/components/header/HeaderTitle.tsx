import React from "react";
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
const HeaderTitle: React.FC<Props> = (props) => {
	return (
		<StyledDiv>
			<h1>{props.children}</h1>
		</StyledDiv>
	);
};

export default HeaderTitle;
