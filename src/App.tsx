import "./App.css";
import PostTemplate from "./templates/postTemplate";
import SignUpArticle from "./domain/signUp/signUp";
import Result from "./domain/signUp/result";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<PostTemplate>
			<Routes>
				<Route index element={<SignUpArticle postTitle="회원가입" />} />
				<Route path="result" element={<Result />} />
			</Routes>
		</PostTemplate>
	);
}

export default App;
