import { Form } from "@/components/Form";
import TagCommon from "@/components/Tag";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface SignUpData {
	username: string; // 아이디
	password: string; // 비밀번호
	confirmPassword: string; // 비밀번호 검사
	nickname: string; // 닉네임
	gender: string; // 성별
	age?: number | undefined | null;
	tag: (string | undefined)[]; // 태그
}
export function SignUpForm() {
	const schema = yup.object().shape({
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
		gender: yup.string().required("성별을 선택하세요."),
		age: yup
			.number()
			.transform((value) =>
				isNaN(value) || value === null || value === undefined ? 0 : value,
			)
			.integer("나이를 정수로 입력하세요.")
			.positive("나이는 양수여야 합니다.")
			.required("나이를 입력하세요."),
		tag: yup.array().of(yup.string()).required("태그를 입력하세요."),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpData>({
		resolver: yupResolver<SignUpData>(schema),
	});

	const onSubmit: SubmitHandler<SignUpData> = async (formData) => {
		console.log(formData);
	};
	return (
		<div>
			<Form schema={schema} onSubmit={handleSubmit(onSubmit)}>
				<Form.Input
					text="아이디"
					type="text"
					placeholder="아이디를 입력해주세요."
					{...register("username", { required: true })}
				/>
				{errors.username && <p className="error">{errors.username.message}</p>}
				<Form.Input
					text="비밀번호"
					type="password"
					placeholder="비밀번호를 입력해주세요."
					{...register("password", { required: true })}
				/>
				{errors.password && <p className="error">{errors.password.message}</p>}
				<Form.Input
					text="비밀번호 확인"
					type="password"
					placeholder="비밀번호를 입력해주세요."
					{...register("confirmPassword", { required: true })}
				/>
				{errors.confirmPassword && (
					<p className="error">{errors.confirmPassword.message}</p>
				)}
				<Form.Input
					text="닉네임"
					type="text"
					placeholder="닉네임을 입력해주세요."
					{...register("nickname", { required: true })}
				/>
				{errors.nickname && <p className="error">{errors.nickname.message}</p>}
				<Form.Input
					text="성별"
					type="radio"
					{...register("gender", { required: true })}
				/>
				{errors.gender && <p className="error">{errors.gender.message}</p>}
				<div>
					<Form.Input
						text="만 나이"
						type="number"
						placeholder="나이를 입력해주세요."
						{...register("age", { required: true })}
					/>
					{errors.age && <p className="error">{errors.age.message}</p>}
				</div>
				<TagCommon text="비타민" />
				<Form.Button name="확인" type="submit" variant="dark" />
			</Form>
		</div>
	);
}
