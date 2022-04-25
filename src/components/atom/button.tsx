import React, { Component } from "react";
import styled from "styled-components";

type Props = {
	children: string;
};

const StyledButton = styled.button`
	flex: 1;
	border: none;
	&:hover {
		border: solid 1;
	}
`;

const Button: React.FC<Props> = (props) => {
	return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
