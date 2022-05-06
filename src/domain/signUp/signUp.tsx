import React, { useState } from "react";
import styled from "styled-components";

type Props = {
	postTitle: string;
};

const SignUpArticle: React.FC<Props> = (props) => {
	const [inputValue, setInputValue] = useState({
		id: "",
		pw: "",
		pwcf: "",
		name: "",
		birth: "",
		adress: "",
		gender: "",
		bio: "",
	});
	const changeValue = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};
	const postSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		fetch("http://localhost:3001/result", {
			method: "post",
			headers: { "Content-Type": "application/json; charset=utf-8" },
			mode: "cors",
			body: JSON.stringify(inputValue, null, 2),
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	};
	return (
		<Article>
			<h2 id="h2">{props.postTitle}</h2>
			<Form onSubmit={postSubmit}>
				<Div>
					<Label htmlFor="id"> 아이디 </Label>
					<Input
						type="text"
						id="id"
						name="id"
						placeholder="xx@email.com"
						onChange={changeValue}
					/>
				</Div>
				<Div>
					<Label htmlFor="name"> 이름 </Label>
					<Input type="text" id="name" name="name" onChange={changeValue} />
				</Div>
				<Div>
					<Label htmlFor="pw"> 비밀번호 </Label>
					<Input
						type="password"
						name="pw"
						placeholder="영문, 숫자 포함 8~16자"
						id="pw"
						onChange={changeValue}
					/>
				</Div>
				<Div>
					<Label htmlFor="pwcf"> 비밀번호 확인</Label>
					<Input type="password" id="pwcf" name="pwcf" onChange={changeValue} />
				</Div>
				<Div>
					<Label htmlFor="birth"> 출생연도 </Label>
					<Input type="date" id="birth" name="birth" onChange={changeValue} />
				</Div>
				<Div>
					<Label htmlFor="adress"> 주소 </Label>
					<Input type="text" id="adress" name="adress" onChange={changeValue} />
				</Div>
				<Div className="wide">
					<Label> 성별 </Label>
					<DivGender>
						<DivInputGender>
							<input
								type="radio"
								name="gender"
								value="male"
								id="male"
								onChange={changeValue}
							/>
							<Label htmlFor="male">male</Label>
						</DivInputGender>
						<DivInputGender>
							<input
								type="radio"
								name="gender"
								value="female"
								id="female"
								onChange={changeValue}
							/>
							<Label htmlFor="female">female</Label>
						</DivInputGender>
						<DivInputGender>
							<input
								type="radio"
								name="gender"
								value="etc"
								id="etc"
								onChange={changeValue}
							/>
							<Label htmlFor="etc">etc</Label>
						</DivInputGender>
					</DivGender>
				</Div>
				<Div className="wide">
					<Label htmlFor="bio"> 자기소개 </Label>
					<textarea
						id="bio"
						name="bio"
						rows={5}
						spellCheck="false"
						onChange={changeValue}
					/>
				</Div>

				<Submit type="submit" value="회원가입" />
			</Form>
		</Article>
	);
};

export default SignUpArticle;

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
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 80%;
	width: 60%;
	margin: auto;
	padding: 5%;
	background: hsl(155, 100%, 89%);
	border-radius: 20px;
`;
const Div = styled.div`
	display: flex;			
	flex-direction: column;
	width: calc(100% / 2 - 10px);
	&.wide {
		width: 100%;
	&.wide textarea {
		padding: 5px;
		resize: none;
	}
`;
const Label = styled.label`
	font-size: small;
	font-weight: bolder;
	color: darkgreen;
`;
const Input = styled.input`
	height: 50px;
	width: 100%;
	border-radius: 5px;
	outline: none;
	font-size: large;
	padding-left: 10px;
	border: 1px solid #ccc;
	border-bottom-width: 2px;
	transition: all 0.3s ease;
	&:invalid {
		border-color: red;
	}
	&:empty {
		border-color: #ccc;
	}
	&:focus {
		border-color: #9b59b6;
	}
	/* &:valid {
		border-color: #9b59b6;
	} */
`;
const DivGender = styled.div`
	display: flex;
	height: 50px;
	justify-content: space-around;
	align-items: center;
	font-size: medium;
`;
const DivInputGender = styled.div`
	& > input:checked + ${Label} {
		color: red;
	}
`;
const Submit = styled.input`
	margin: 5% auto auto auto;
	width: 100%;
	height: 100%;
	border: 0;
	background-color: coral;
	border-radius: 5px;
	font-size: large;
	&:hover {
		background-color: chartreuse;
	}
	g:active {
		background-color: crimson;
	}
`;
