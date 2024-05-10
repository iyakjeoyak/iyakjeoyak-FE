import * as yup from "yup";
export interface SignUpFormType {
	profileImage?: File | null; // 프로필
	username: string; // 아이디
	password: string; // 비밀번호
	confirmPassword: string; // 비밀번호 검사
	nickname: string; // 닉네임
	gender: string; // 성별
	age: number; // 나이
	userHashtagList: number[]; //태그
}
export const signUpDefault = {
	profileImage: null,
	username: "", // 아이디
	password: "", // 비밀번호
	confirmPassword: "", // 비밀번호 검사
	nickname: "", // 닉네임
	gender: "", // 성별
	age: 20, // 나이
	userHashtagList: [], //태그
};

// 이메일 도메인 확인 유틸리티 함수
const isAllowedDomain = (email: string, allowedDomains: string[]) => {
	const domain = email.split("@")[1];
	return allowedDomains.some((allowedDomain) => domain === allowedDomain);
};
// 허용된 이메일 도메인 목록
const allowedDomains = ["naver.com", "gmail.com", "kakao.com"];
const emailCheckRegex =
	/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

export const signupValidation = yup.object().shape({
	profileImage: yup.mixed<File>().nullable(),
	username: yup
		.string()
		.matches(emailCheckRegex, "이메일형식에 맞지 않습니다")
		.test("allowedDomain", "지원되는 도메인의 이메일을 사용하세요", (value) =>
			value ? isAllowedDomain(value, allowedDomains) : true,
		)
		.required("이메일을 입력하세요."),
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
	userHashtagList: yup
		.array()
		.of(yup.number().required())
		.min(1, "태그를 선택하세요.")
		.required("태그를 선택하세요."),
});
