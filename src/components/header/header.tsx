import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";

const Header: React.FC = () => {
	return (
		<header className="header_container">
			<HeaderTitle>title</HeaderTitle>
			<HeaderNav />
		</header>
	);
};

export default Header;
