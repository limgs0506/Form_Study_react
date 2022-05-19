import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";
import { BrowserRouter as Router } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="header_container">
			<Router>
				<HeaderTitle>title</HeaderTitle>
				<HeaderNav />
			</Router>
		</header>
	);
};

export default Header;
