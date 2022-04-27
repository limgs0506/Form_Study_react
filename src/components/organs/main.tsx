import React from "react";
import RegistForm from "./registForm";
import styled from "styled-components";

const StyledMain = styled.main`
	flex: 1 0 auto;
	min-height: 100%;
	padding: 0 3rem;
	background-color: white;
	&: article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100vh;
	}
	&: article h2 {
		margin: 1rem auto;
	}
`;
const Main: React.FC = () => {
	return (
		<StyledMain>
			<article>
				<RegistForm />
			</article>
		</StyledMain>
	);
};

export default Main;
