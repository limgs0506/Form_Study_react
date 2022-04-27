import React from "react";
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

//import한 Input의 CSS 속성을 여기서 건들고 싶다
const StyledInput = styled(Input)``;
const StyledDiv = styled.div`
	isplay: flex;
	flex-direction: column;
	width: calc(100% / 2 - 10px);
	&: > Label {
		font-size: small;
		font-weight: bolder;
		color: darkgreen;
	}
	&: > ${StyledInput}: not([type="radio"]) {
		height: 50px;
		width: 100%;
		border-radius: 5px;
		outline: none;
		font-size: large;
		padding-left: 10px;
		border: 1px solid #ccc;
		border-bottom-width: 2px;
		transition: all 0.3s ease;
	}
	&: > Input:invalid {
		border-color: red;
	}
	&: > Input:empty {
		border-color: #ccc;
	}
	&: > Input:focus
	border-color: #9b59b6;
}
`;

const InputText: React.FC<Props> = (props) => {
	return (
		<StyledDiv className="input_con">
			<Label name={props.name}>{props.children}</Label>
			<StyledInput
				type={props.type}
				name={props.name}
				id={props.id}
				holder={props.holder}
				value={props.value}
			/>
		</StyledDiv>
	);
};

export default InputText;
