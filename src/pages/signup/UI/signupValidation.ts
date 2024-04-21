import * as yup from "yup";
export const signupValidation = yup.object().shape({
	username: yup
		.string()
		.min(6, "아이디는 6자리 이상이어야합니다.")
		.required("아이디를 입력하세요."),
	password: yup
		.string()
		.min(8, "비밀번호는 8자리 이상이어야 합니다.")
		.required("비밀번호를 입력하세요."),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), ""], "비밀번호가 일치하지 않습니다.")
		.required("비밀번호를 입력하세요."),
	nickname: yup.string().required("닉네임을 입력하세요."),
	// gender: yup.string().required("성별을 선택하세요."),
	age: yup
		.number()
		.transform((value) =>
			isNaN(value) || value === null || value === undefined ? 0 : value,
		)
		.integer("나이를 정수로 입력하세요.")
		.positive("나이는 양수여야 합니다.")
		.required("나이를 입력하세요."),
	// tag: yup.array().of(yup.string()).required("태그를 입력하세요."),
});
//useMemo사용하기
