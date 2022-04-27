import React from "react";
import styled from "styled-components";
import Input from "../../components/atom/input";
import Label from "../../components/atom/label";

type Props = {
	type: string;
	children: string;
	name: string;
	id?: string;
	holder?: string;
	value?: string;
};
const StyledInput = styled(Input)``;
const StyledDiv = styled.div`
	${StyledInput} {
		&:checked + Label {
			font-weight: bold;
		}
	}
`;

const InputRadio: React.FC<Props> = (props) => {
	return (
		<StyledDiv className="gender_input">
			<Input
				type={props.type}
				name={props.name}
				id={props.id}
				holder={props.holder}
				value={props.value}
			/>
			<Label name={props.name}>{props.children}</Label>
		</StyledDiv>
	);
};

export default InputRadio;
