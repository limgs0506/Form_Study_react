import "./App.css";
import PostTemplate from "./templates/postTemplate";
import SignUpArticle from "./domain/signUp/signUp";

function App() {
	return (
		<PostTemplate>
			<SignUpArticle postTitle="회원가입" />
		</PostTemplate>
	);
}

export default App;
