import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	background-color: lightslategray;
	padding: 1rem;
`;
const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<abbr> 푸터 </abbr>
		</StyledFooter>
	);
};
export default Footer;
