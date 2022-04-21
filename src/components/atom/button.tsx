import React, { Component } from "react";

type Props = {
	children: string;
};

const Button: React.FC<Props> = (props) => {
	return <button>{props.children}</button>;
};

export default Button;
