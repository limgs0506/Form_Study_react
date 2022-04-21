import React, { Component } from "react";

type Props = {
	children: String;
};

const HeaderTitle: React.FC<Props> = (props) => {
	return (
		<div className="header_title">
			<h1>{props.children}</h1>
		</div>
	);
};

export default HeaderTitle;
