import React, { Component } from "react";
import Input from "../atom/input";
import Label from "../atom/label";

type Props = {
	type: string;
	children: string;
	name: string;
	id?: string;
	holder?: string;
	value?: string;
};

const InputText: React.FC<Props> = (props) => {
	return (
		<div className="gender_input">
			<Input
				type={props.type}
				name={props.name}
				id={props.id}
				holder={props.holder}
				value={props.value}
			/>
			<Label name={props.name}>{props.children}</Label>
		</div>
	);
};

export default InputText;
