import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Result: React.FC = () => {
	const [user, setUser] = useState({
		id: "",
		name: "",
		pw: "",
		pwcf: "",
		birth: "",
		adress: "",
		gender: "",
		bio: "",
	});
	const { memberID } = useParams();
	//useEffect의 side effect 관리에 대해
	useEffect(() => {
		fetch(`http://localhost:3001/result/${memberID}`, {
			headers: { "Content-Type": "text/html; charset=utf-8" },
			mode: "cors",
		})
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, [memberID]);

	return (
		<Article>
			<h2>Result</h2>
			<p>id: {user.id}</p>
			<p>name: {user.name}</p>
			<p>pw: {user.pw}</p>
			<p>pwcf: {user.pwcf}</p>
			<p>birth: {user.birth}</p>
			<p>adress: {user.adress}</p>
			<p>gender: {user.gender}</p>
			<p>bio: {user.bio}</p>
			<StdLink to="/">Back to Form</StdLink>
		</Article>
	);
};

const Article = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin: 0;
	& h2 {
		margin: 1em 0;
	}
`;
const StdLink = styled(Link)`
	text-decoration: none;
	color: blue;
`;

export default Result;
