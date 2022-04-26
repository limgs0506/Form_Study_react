import React, { Component } from "react";
import styled from "styled-components";

type Props = {
	children: string;
	name: string;
};
const StyledLabel = styled.label`
	font-size: small;
	font-weight: bolder;
	color: darkgreen;
`;
const Label: React.FC<Props> = (props) => {
	return <StyledLabel htmlFor={props.name}> {props.children} </StyledLabel>;
};

export default Label;
