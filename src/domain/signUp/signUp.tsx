import React from "react";
import styled from "styled-components";

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
	#wide {
		width: 100%;
	#wide > textarea {
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
	& > input:checked + label {
		font-weight: bold;
	}
`;
const DivSubmit = styled.div`
	display: flex;
	width: 100%;
	align-items: flex-end;
`;
const Submit = styled.input`
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
type Props = {
	postTitle: string;
};

const SignUpArticle: React.FC<Props> = (props) => {
	return (
		<Article>
			<h2 id="h2">{props.postTitle}</h2>
			<Form action="result" method="post" className="htmlForm">
				<Div>
					<Label htmlFor="id"> 아이디 </Label>
					<Input type="text" name="id" placeholder="xx@email.com" />
				</Div>
				<Div>
					<Label htmlFor="name"> 이름 </Label>
					<Input type="text" name="name" />
				</Div>
				<Div>
					<Label htmlFor="pw"> 비밀번호 </Label>
					<Input
						type="password"
						name="pw"
						placeholder="영문, 숫자 포함 8~16자"
						id="password"
					/>
				</Div>
				<Div>
					<Label htmlFor="password"> 비밀번호 확인</Label>
					<Input type="password" name="pass_con" id="password_confirm" />
				</Div>
				<Div>
					<Label htmlFor="birth"> 출생연도 </Label>
					<Input type="date" name="birth" />
				</Div>
				<Div>
					<Label htmlFor="adress"> 주소 </Label>
					<Input type="text" name="adress" />
				</Div>
				<Div id="wide">
					<Label htmlFor="gender"> 성별 </Label>
					<DivGender>
						<DivInputGender>
							<input type="radio" name="gender" value="male" id="male" />
							<Label htmlFor="male">male</Label>
						</DivInputGender>
						<DivInputGender>
							<input type="radio" name="gender" value="female" id="female" />
							<Label htmlFor="female">female</Label>
						</DivInputGender>
						<DivInputGender>
							<input type="radio" name="gender" value="etc" id="etc" />
							<Label htmlFor="etc">etc</Label>
						</DivInputGender>
					</DivGender>
				</Div>
				<Div id="wide">
					<Label htmlFor="bio"> 자기소개 </Label>
					<textarea name="bio" rows={5} />
				</Div>
				<DivSubmit>
					<Submit type="submit" value="회원가입" />
				</DivSubmit>
			</Form>
		</Article>
	);
};

export default SignUpArticle;
