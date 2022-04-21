import React, { Component } from "react";

type Props = {
	children: string;
	name: string;
};

const Label: React.FC<Props> = (props) => {
	return <label htmlFor={props.name}> {props.children} </label>;
};

export default Label;
