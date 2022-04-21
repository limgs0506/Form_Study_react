import React, { Component } from "react";

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
			<label htmlFor={props.name}> {props.children} </label>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				placeholder={props.holder}
			/>
		</div>
	);
};

export default InputText;
