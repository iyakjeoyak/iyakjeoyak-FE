import { useNavigate } from "react-router-dom";
import {
	SignUpType,
	signUpDefault,
	useSignupValidation,
} from "../utils/signupValidation";
import { Form } from "@/components/Form";
import styles from "@/pages/signup/style/SignUpForm.module.scss";
import { tagData } from "../../../components/Form/TagButton/TagData";
import Container from "@/components/Form/Container";
import { postSignUp } from "@/api/post";

export function SignUpI() {
	return (
		// 로그인 유효성 검사
		<Form
			validationSchema={useSignupValidation()}
			pageDefaultValues={signUpDefault}
		>
			<SignUpForm />
		</Form>
	);
}

export function SignUpForm() {
	const navigate = useNavigate();

	const onSubmit = async (data: SignUpType) => {
		const firstFile = data.profileImage?.[0];
		const updatedData = {
			...data,
			profileImage: firstFile as File,
		};
		console.log(updatedData);
		try {
			const response = await postSignUp(updatedData);
			console.log("response", response);
			if (response.status >= 200 && response.status < 300) {
				alert("회원가입이 완료되었습니다.");
				navigate("/login");
			}
		} catch (error) {
			console.error("api error", error);
		}
	};

	return (
		<Form
			validationSchema={useSignupValidation()}
			pageDefaultValues={signUpDefault}
			onSubmit={onSubmit}
		>
			<Form.ImgInput name="profileImage" />

			<Form.Input<SignUpType>
				name="username"
				title="아이디"
				placeholder="아이디를 입력해주세요."
			/>
			<Form.Input<SignUpType>
				name="password"
				title="비밀번호"
				placeholder="비밀번호를 입력해주세요."
				type="password"
			/>

			<Form.Input<SignUpType>
				name="confirmPassword"
				title="비밀번호 확인"
				placeholder="비밀번호를 입력해주세요."
				type="password"
			/>

			<Form.Input<SignUpType>
				name="nickname"
				title="닉네임"
				placeholder="닉네임을 입력해주세요."
			/>
			<Container title="성별" name="gender">
				<div className={`${styles.genderBox}`}>
					<Form.RadioButton name="gender" text="남성" value="남성" />
					<Form.RadioButton name="gender" text="여성" value="여성" />
					<Form.RadioButton name="gender" text="비공개" value="비공개" />
				</div>
			</Container>

			<Form.Input<SignUpType>
				name="age"
				title="만 나이"
				placeholder="나이를 입력해주세요."
				type="number"
			/>
			<Container title="성별" name="gender">
				<div className={`${styles.tagWrap}`}>
					{tagData.map((tags) => (
						<Form.TagButton
							key={tags.id}
							text={tags.name}
							name="tag"
							value={tags.id}
						/>
					))}
				</div>
			</Container>
			<Form.Button text="확인" type="submit" variant="dark" />
		</Form>
	);
}
