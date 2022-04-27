import React from "react";
import Label from "../../components/atom/label";
import InputRadio from "./inputRadio";
import styled from "styled-components";

type Props = {
	type: string;
	name: string;
	id?: string;
	value?: string;
};

const StyledInputDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% / 2 - 10px);
`;
const StyledGenderDiv = styled.div`
	display: flex;
	height: 50px;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	font-size: medium;
`;

const GenderRadio: React.FC<Props> = (props) => {
	return (
		<StyledInputDiv className="input_con" id="gender">
			<StyledGenderDiv className="gender_div">
				<Label name={props.name}>gender</Label>
				<InputRadio
					type={props.type}
					name={props.name}
					value={props.value}
					id={props.id}
				>
					male
				</InputRadio>
				<InputRadio
					type={props.type}
					name={props.name}
					value={props.value}
					id={props.id}
				>
					female
				</InputRadio>
				<InputRadio
					type={props.type}
					name={props.name}
					value={props.value}
					id={props.id}
				>
					etc
				</InputRadio>
			</StyledGenderDiv>
		</StyledInputDiv>
	);
};

export default GenderRadio;
