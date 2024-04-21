import { Form } from "@/components/Form";
import TagCommon from "@/components/Tag";
import { useFormContext } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { signupValidation } from "./signupValidation";
import { ErrorMessage } from "@hookform/error-message";
interface SignUpType {
	username: string; // 아이디
	password: string; // 비밀번호
	confirmPassword: string; // 비밀번호 검사
	nickname: string; // 닉네임
	gender: string; // 성별
	age?: number | undefined | null;
	tag: (string | undefined)[]; // 태그
}
export default function SignUpForm() {
	return (
		// 로그인 유효성 검사
		<Form validationSchema={signupValidation}>
			<SignUpInput />
		</Form>
	);
}

function SignUpInput() {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useFormContext<SignUpType>();

	const onSubmit = async (data: SignUpType) => {
		console.log("data", data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Form.Input<SignUpType>
						name="username"
						title="아이디"
						placeholder="아이디를 입력해주세요."
						type="text"
					/>
					{/* <div>{formState.errors.username?.message}</div> */}
					<ErrorMessage
						errors={errors}
						name="username"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>

				<div>
					<Form.Input<SignUpType>
						name="password"
						title="비밀번호"
						placeholder="비밀번호를 입력해주세요."
						type="password"
					/>
					<ErrorMessage
						errors={errors}
						name="password"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>

				<div>
					<Form.Input<SignUpType>
						name="confirmPassword"
						title="비밀번호 확인"
						placeholder="비밀번호를 입력해주세요."
						type="password"
					/>
					<ErrorMessage
						errors={errors}
						name="confirmPassword"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>

				<div>
					<Form.Input<SignUpType>
						name="nickname"
						title="닉네임"
						placeholder="닉네임을 입력해주세요."
						type="text"
					/>
					<ErrorMessage
						errors={errors}
						name="nickname"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>

				{/* <div>
					<div>성별</div>
					<Form.RadioButton
						text="남성"
						value="남성"
						{...register("gender", { required: true })}
					/>
					<Form.RadioButton
						text="여성"
						value="여성"
						{...register("gender", { required: true })}
					/>
					<Form.RadioButton
						text="비공개"
						value="비공개"
						{...register("gender", { required: true })}
					/>
					{errors.gender && <p className="error">{errors.gender.message}</p>}
				</div> */}

				<div>
					<Form.Input<SignUpType>
						name="age"
						title="만 나이"
						placeholder="나이를 입력해주세요."
						type="number"
					/>
					<ErrorMessage
						errors={errors}
						name="age"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>

				<TagCommon text="비타민" />
				<Form.Button text="확인" type="submit" variant="dark" />
			</form>
			<DevTool control={control} />
		</div>
	);
}
