import { useNavigate } from "react-router-dom";
import {
	SignUpFormType,
	signUpDefault,
	signupValidation,
} from "../utils/signupValidation";
import { Form } from "@/components/Form";
import styles from "@/pages/signup/style/SignUpForm.module.scss";
import { tagData } from "../../../components/Form/TagButton/TagData";
import Container from "@/components/Form/Container";
import { useMutation } from "@tanstack/react-query";
import postSignUp from "@/api/post/postSignUp";

export function SignUpI() {
	return (
		// 로그인 유효성 검사
		<Form validationSchema={signupValidation} pageDefaultValues={signUpDefault}>
			<SignUpForm />
		</Form>
	);
}

export function SignUpForm() {
	const navigate = useNavigate();
	const { mutate } = useMutation({
		mutationFn: postSignUp,
	});

	const onSubmit = (data: SignUpFormType) => {
		const firstFile = data.profileImage?.[0];
		const updatedData = {
			...data,
			imageUrl: firstFile,
			// userRoleList: [0], 1로 설정해서 추가하기
		};
		console.log(updatedData);

		mutate(updatedData, {
			onSuccess: () => {
				alert("회원가입이 완료되었습니다.");
				navigate("/login");
			},
			onError: () => {
				alert("회원가입에 실패하였습니다.");
			},
		});
	};

	return (
		<Form
			validationSchema={signupValidation}
			pageDefaultValues={signUpDefault}
			onSubmit={onSubmit}
		>
			<Form.ImgInput name="profileImage" />

			<Form.Input<SignUpFormType>
				name="username"
				title="아이디"
				placeholder="아이디를 입력해주세요."
			/>
			<Form.Input<SignUpFormType>
				name="password"
				title="비밀번호"
				placeholder="비밀번호를 입력해주세요."
				type="password"
			/>

			<Form.Input<SignUpFormType>
				name="confirmPassword"
				title="비밀번호 확인"
				placeholder="비밀번호를 입력해주세요."
				type="password"
			/>

			<Form.Input<SignUpFormType>
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

			<Form.Input<SignUpFormType>
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
