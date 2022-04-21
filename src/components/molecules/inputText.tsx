import React, { Component } from "react";
import Input from "../atom/input";
import Label from "../atom/label";

type Props = {
	type: string;
	children: string;
	name: string;
	id?: string;
	holder?: string;
};

const InputText: React.FC<Props> = (props) => {
	return (
		<div className="input_con">
			<Label name={props.name}>{props.children}</Label>
			<Input
				type={props.type}
				name={props.name}
				id={props.id}
				holder={props.holder}
			/>
		</div>
	);
};

export default InputText;
