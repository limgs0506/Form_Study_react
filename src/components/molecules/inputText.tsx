import React, { Component } from "react";
import Input from "../atom/input";
import Label from "../atom/label";
import styled from "styled-components";

type Props = {
	type: string;
	children: string;
	name: string;
	id?: string;
	holder?: string;
	value?: string;
};

const StyeldDiv = styled.div`
	isplay: flex;
	flex-direction: column;
	width: calc(100% / 2 - 10px);
`;

const InputText: React.FC<Props> = (props) => {
	return (
		<StyeldDiv className="input_con">
			<Label name={props.name}>{props.children}</Label>
			<Input
				type={props.type}
				name={props.name}
				id={props.id}
				holder={props.holder}
				value={props.value}
			/>
		</StyeldDiv>
	);
};

export default InputText;
