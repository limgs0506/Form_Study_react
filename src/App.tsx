import { useState, useEffect } from "react";
import "./App.css";
import AuthPage from "./components/page/auth";

function App() {
	const [title, setTitle] = useState("리액트");
	//뭐임???
	const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return <AuthPage />;
}

export default App;
