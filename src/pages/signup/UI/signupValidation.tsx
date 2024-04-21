import { useMemo } from "react";
import * as yup from "yup";
export const signupValidation = yup.object().shape({
	username: yup
		.string()
		.matches(
			/^[a-zA-Z0-9]{4,12}$/,
			"아이디는 4~12자의 영문 또는 숫자만 허용됩니다.",
		)
		.required("아이디를 입력하세요."),
	password: yup
		.string()
		.matches(
			/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/,
			"비밀번호는 영문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.",
		)
		.required("비밀번호를 입력하세요."),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), ""], "비밀번호가 일치하지 않습니다.")
		.required("비밀번호를 입력하세요."),
	nickname: yup.string().required("닉네임을 입력하세요."),
	gender: yup.string().required("성별을 선택하세요."),
	age: yup
		.number()
		.transform((value) =>
			isNaN(value) || value === null || value === undefined ? 0 : value,
		)
		.min(1, "나이는 1세 이상이어야 합니다.")
		.max(100, "나이는 100세 이하여야 합니다.")
		.integer("나이를 정수로 입력하세요.")
		.positive("나이는 양수여야 합니다.")
		.required("나이를 입력하세요."),
	tag: yup
		.array()
		.of(yup.string())
		.min(1, "태그를 선택하세요.")
		.required("태그를 선택하세요."),
});

// useMemo사용하기
export const useSignupValidation = () => {
	const validationSchema = useMemo(() => signupValidation, []);
	return validationSchema;
};

export const signUpDefault = {
	username: "", // 아이디
	password: "", // 비밀번호
	confirmPassword: "", // 비밀번호 검사
	nickname: "", // 닉네임
	gender: "", // 성별
	age: undefined, // 나이
	tag: [], //태그
};
