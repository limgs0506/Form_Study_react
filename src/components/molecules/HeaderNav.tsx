import React, { Component } from "react";
import Button from "../atom/button";

const HeaderNav: React.FC = () => {
	return (
		<nav className="head_nav">
			<Button>1</Button>
			<Button>2</Button>
			<Button>3</Button>
			<Button>4</Button>
			<Button>5</Button>
		</nav>
	);
};

export default HeaderNav;
