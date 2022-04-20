import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [title, setTitle] = useState("리액트");
	//뭐임???
	const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<div className="App">
			<h1>{title}</h1>
			<input type="text" onChange={changeTitle} />
		</div>
	);
}

export default App;
