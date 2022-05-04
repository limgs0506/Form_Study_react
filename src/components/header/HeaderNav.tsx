import React from "react";
import Button from "./button";
import styled from "styled-components";

const StyledNav = styled.nav`
	display: flex;
	width: 100%;
	min-height: 2rem;
`;
const HeaderNav: React.FC = () => {
	return (
		<StyledNav>
			<Button>1</Button>
			<Button>2</Button>
			<Button>3</Button>
			<Button>4</Button>
			<Button>5</Button>
		</StyledNav>
	);
};

export default HeaderNav;
