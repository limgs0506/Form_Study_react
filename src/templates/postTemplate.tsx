import React, { ReactNode } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styled from "styled-components";

const StyledDiv = styled.div`
	flex: 1 0 auto;
	padding: 0 10%;
	background-color: dimgray;
`;
const StyledMain = styled.main`
	flex: 1 0 auto;
	min-height: 100vh;
	padding: 0 3rem;
	background-color: white;
`;

type Props = {
	children: ReactNode;
};
const PostTemplate: React.FC<Props> = (props) => {
	return (
		<>
			<Header />
			<StyledDiv>
				<StyledMain>{props.children}</StyledMain>
			</StyledDiv>
			<Footer />
		</>
	);
};

export default PostTemplate;
