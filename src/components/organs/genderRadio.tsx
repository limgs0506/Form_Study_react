import React, { Component } from "react";
import Label from "../atom/label";
import InputRadio from "../molecules/inputRadio";

type Props = {
	type: string;
	children: string;
	name: string;
	id?: string;
	holder?: string;
	value?: string;
};

const GenderRadio: React.FC<Props> = (props) => {
	return (
		<div className="input_con" id="gender">
			<Label name={props.name}>gender</Label>
			<div className="gender_div">
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
			</div>
		</div>
	);
};

export default GenderRadio;
