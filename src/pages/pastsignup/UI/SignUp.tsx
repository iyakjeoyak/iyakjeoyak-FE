import {
	SignUpFormType,
	signUpDefault,
	signupValidation,
} from "../utils/signupValidation";
import { useMutation, useQuery } from "@tanstack/react-query";

import Container from "@/components/Form/Container";
import { Form } from "@/components/Form";
import postSignUp from "@/api/user/postSignUp";
import styles from "@/pages/signup/styles/SignUp.module.scss";
import tagQueryOptions from "@/api/tag";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function SignUp() {
	const navigate = useNavigate();
	const { mutate } = useMutation({
		mutationFn: postSignUp,
	});
	const { data: tags } = useQuery(tagQueryOptions.getHashtags());
	const onSubmit = (data: SignUpFormType) => {
		const { profileImage, ...jsonData } = data;

		const formData = new FormData();
		const userJoinPayload = {
			...jsonData,
			userRoleList: [1],
		};
		formData.append(
			"userJoinPayload",
			new Blob([JSON.stringify(userJoinPayload)], { type: "application/json" }),
		);
		formData.append("imgFile", profileImage || "");
		mutate(formData, {
			onSuccess: () => {
				toast.success("회원가입이 완료되었습니다.", { autoClose: 2000 });
				navigate("/login");
			},
			onError: () => {
				toast.error("회원가입에 실패하였습니다.", { autoClose: 2000 });
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
			<Form.Input
				name="username"
				title="이메일"
				placeholder="이메일을 입력해주세요."
			/>

			<Form.Input
				name="password"
				title="비밀번호"
				placeholder="비밀번호를 입력해주세요."
				type="password"
			/>

			<Form.Input
				name="confirmPassword"
				title="비밀번호 확인"
				placeholder="비밀번호를 입력해주세요."
				type="password"
			/>
			<Form.Input
				name="nickname"
				title="닉네임"
				placeholder="닉네임을 입력해주세요."
			/>

			<Container title="성별" name="gender">
				<div className={`${styles.genderBox}`}>
					<Form.RadioButton name="gender" text="남성" value="MALE" />
					<Form.RadioButton name="gender" text="여성" value="FEMALE" />
					<Form.RadioButton name="gender" text="비공개" value="SECRET" />
				</div>
			</Container>

			<Form.Input
				name="age"
				title="만 나이"
				placeholder="나이를 입력해주세요."
				type="number"
			/>

			<Form.TagBoard
				title="건강 고민"
				name="userHashtagList"
				tags={tags ?? []}
			/>

			<Form.Button text="확인" type="submit" variant="dark" />
		</Form>
	);
}
