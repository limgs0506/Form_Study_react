import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "./main";

const AuthPage: React.FC = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default AuthPage;
