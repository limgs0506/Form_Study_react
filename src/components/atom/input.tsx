import React, { Component } from "react";

type Props = {
	type: string;
	name: string;
	id?: string;
	holder?: string;
	value?: string;
};

const Input: React.FC<Props> = (props) => {
	return (
		<input
			type={props.type}
			name={props.name}
			id={props.id}
			placeholder={props.holder}
			value={props.value}
		/>
	);
};

export default Input;
