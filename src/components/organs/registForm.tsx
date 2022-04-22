import React, { Component } from "react";
import InputText from "../molecules/inputText";
import Input from "../atom/input";
import GenderRadio from "./genderRadio";

const RegistForm: React.FC = (props) => {
	return (
		<form action="result" method="post" className="form">
			<InputText type="text" name="id" holder="">
				ID
			</InputText>
			<InputText type="text" name="name" holder="">
				Name
			</InputText>
			<InputText type="password" name="pass" id="pass" holder="">
				Password
			</InputText>
			<InputText type="password" name="pass_conf" id="pass_conf" holder="">
				Confirm Password
			</InputText>
			<InputText type="date" name="birth">
				Birth
			</InputText>
			<InputText type="text" name="adress">
				adress
			</InputText>

			<GenderRadio type="radio" name="gender" />

			<Input type="submit" name="submit" value="Register" />
		</form>
	);
};

export default RegistForm;
