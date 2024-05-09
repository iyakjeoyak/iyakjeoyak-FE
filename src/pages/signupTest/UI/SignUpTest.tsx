import { useNavigate } from "react-router-dom";
import { SignUpFormType } from "@/pages/signup/utils/signupValidation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import postSignUp from "@/api/user/postSignUp";
import styles from "@/pages/signup/styles/SignUp.module.scss";
import { ControlForm } from "@/components/ControlForm";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
	getDuplicationEmail,
	getDuplicationNickName,
} from "@/api/user/duplication";
import Container from "@/components/ControlForm/Container";

export function SignUpTest() {
	const navigate = useNavigate();
	const { register, handleSubmit, getValues, watch, control } =
		useForm<SignUpFormType>({
			mode: "onSubmit",
		});
	const { mutate } = useMutation({
		mutationFn: postSignUp,
	});

	// const { data: tags } = useQuery(commonQueryOptions.getHashtags());
	const onSubmit = (data: SignUpFormType) => {
		const { profileImage, ...jsonData } = data;

		const formData = new FormData();
		const userJoinPayload = {
			...jsonData,
			userRoleList: [1], // 백엔드에서 추가 요구하신 필드 값
		};
		// 회원가입 데이터
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

	const handleCheckUserName = async () => {
		const username = getValues("username");
		const response = await getDuplicationEmail({ username });
		if (response === false) {
			toast.success("사용 가능한 이메일 입니다.", { autoClose: 2000 });
		} else {
			toast.error("이미 사용 중인 이메일 입니다.", { autoClose: 2000 });
		}
	};
	const handleCheckNickName = async () => {
		const nickname = getValues("nickname");
		const response = await getDuplicationNickName({ nickname });
		if (response === false) {
			toast.success("사용 가능한 닉네임 입니다."), { autoClose: 2000 };
		} else {
			toast.error("이미 사용 중인 닉네임 입니다.", { autoClose: 2000 });
		}
	};
	const gender = watch("gender");
	console.log(gender);
	return (
		<ControlForm onSubmit={handleSubmit(onSubmit)}>
			{/* <ControlForm.ImgInput name="profileImage" /> */}
			<ControlForm.Input
				title="이메일"
				placeholder="이메일을 입력해주세요."
				{...register("username")}
			/>
			<ControlForm.Button
				onClick={handleCheckUserName}
				text="이메일 중복확인"
				type="button"
				variant="dark"
			/>

			<ControlForm.Input
				title="비밀번호"
				placeholder="비밀번호를 입력해주세요."
				type="password"
				{...register("password")}
			/>

			<ControlForm.Input
				title="비밀번호 확인"
				placeholder="비밀번호를 입력해주세요."
				type="password"
				{...register("confirmPassword")}
			/>
			<ControlForm.Input
				title="닉네임"
				placeholder="닉네임을 입력해주세요."
				{...register("nickname")}
			/>
			<ControlForm.Button
				onClick={handleCheckNickName}
				text=" 중복확인"
				type="button"
				variant="dark"
			/>
			<Container title="성별">
				<div className={`${styles.genderBox}`}>
					<ControlForm.RadioButton
						text="남성"
						value="MALE"
						id="male"
						{...register("gender")}
					/>
					<ControlForm.RadioButton
						text="여성"
						value="FEMALE"
						id="female"
						{...register("gender")}
					/>
					<ControlForm.RadioButton
						text="비공개"
						value="SECRET"
						id="secret"
						{...register("gender")}
					/>
				</div>
			</Container>
			<ControlForm.Input
				title="만 나이"
				placeholder="나이를 입력해주세요."
				type="number"
				{...register("age")}
			/>

			<ControlForm.Button text="확인" type="submit" variant="dark" />
			<DevTool control={control} />
		</ControlForm>
	);
}
