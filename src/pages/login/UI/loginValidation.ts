import * as yup from "yup";

export const loginValidation = yup.object().shape({
	username: yup
		.string()
		.min(6, "아이디는 6자리 이상이어야합니다.")
		.required("아이디를 입력하세요."),
	password: yup
		.string()
		.min(8, "비밀번호는 8자리 이상이어야 합니다.")
		.required("비밀번호를 입력하세요."),
});
