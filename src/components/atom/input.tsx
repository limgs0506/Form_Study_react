import React, { Component } from "react";
import styled from "styled-components";

type Props = {
	type: string;
	name: string;
	id?: string;
	holder?: string;
	value?: string;
};

const StyledInput = styled.input`
	height: 50px;
	width: 100%;
	border-radius: 5px;
	outline: none;
	font-size: large;
	padding-left: 10px;
	border: 1px solid #ccc;
	border-bottom-width: 2px;
	transition: all 0.3s ease;
`;
const Input: React.FC<Props> = (props) => {
	return (
		<StyledInput
			type={props.type}
			name={props.name}
			id={props.id}
			placeholder={props.holder}
			value={props.value}
		/>
	);
};

export default Input;
