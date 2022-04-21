import React, { Component } from "react";
import HeaderNav from "../molecules/HeaderNav";
import HeaderTitle from "../molecules/HeaderTitle";

const Header: React.FC = () => {
	return (
		<header className="header_container">
			<HeaderTitle>title</HeaderTitle>
			<HeaderNav />
		</header>
	);
};

export default Header;
