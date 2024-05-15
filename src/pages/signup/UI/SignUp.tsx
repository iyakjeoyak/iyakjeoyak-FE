import {
	SignUpFormType,
	signUpDefault,
	signupValidation,
} from "../utils/signupValidation";
import {
	getDuplicationEmail,
	getDuplicationNickName,
} from "@/api/user/duplication";
import { useForm, useWatch } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";

import Container from "@/components/ControlForm/Container";
import { ControlForm } from "@/components/ControlForm";
import { ErrorMessage } from "@hookform/error-message";
import MailVerifyModal from "./MailVerifyModal";
import postMailSendVerify from "@/api/user/postMailSendVerify";
import styles from "../styles/SignUp.module.scss";
import tagQueryOptions from "@/api/tag";
import { toast } from "react-toastify";
import { useState } from "react";
import useToggle from "@/hooks/useToggle";
import { yupResolver } from "@hookform/resolvers/yup";

// import { DevTool } from "@hookform/devtools";

export function SignUp() {
	const [signUpData, setSignUpData] = useState<SignUpFormType>({
		username: "", // 아이디
		password: "", // 비밀번호
		confirmPassword: "", // 비밀번호 검사
		nickname: "", // 닉네임
		gender: "", // 성별
		age: 0, // 나이
		userHashtagList: [], //태그
	});
	const { isOpen, onClose, onOpen, toggleOpen } = useToggle();
	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		formState: { errors },
		control,
	} = useForm<SignUpFormType>({
		mode: "onSubmit",
		resolver: yupResolver(signupValidation), // yup 스키마를 해결하는 resolver 설정
		defaultValues: signUpDefault,
	});
	const selectedTags = useWatch({ control, name: "userHashtagList" });

	const { data: tags } = useQuery(tagQueryOptions.getHashtags());
	// 이메일 인증번호 전송
	const { mutate: mailSendVerify } = useMutation({
		mutationFn: postMailSendVerify,
		onSuccess: () => {
			toast.success("인증번호가 전송되었습니다.", { autoClose: 2000 });
			onOpen();
		},
		onError: () => {
			toast.error("인증번호 전송에 실패하였습니다.", { autoClose: 2000 });
		},
	});

	// 회원가입
	const onSubmit = (data: SignUpFormType) => {
		const { username } = data;
		mailSendVerify({ username });
		setSignUpData(data);
	};

	// 이메일 중복검사
	const handleCheckUserName = async () => {
		const username = getValues("username");
		const response = await getDuplicationEmail({ username });
		if (response === false) {
			toast.success("사용 가능한 이메일 입니다.", { autoClose: 2000 });
		} else {
			toast.error("이미 사용 중인 이메일 입니다.", { autoClose: 2000 });
		}
	};
	// 닉네임 중복검사
	const handleCheckNickName = async () => {
		const nickname = getValues("nickname");
		const response = await getDuplicationNickName({ nickname });
		if (response === false) {
			toast.success("사용 가능한 닉네임 입니다."), { autoClose: 2000 };
		} else {
			toast.error("이미 사용 중인 닉네임 입니다.", { autoClose: 2000 });
		}
	};

	return (
		<>
			{isOpen && (
				<MailVerifyModal
					isOpen={isOpen}
					onClose={onClose}
					onOpen={onOpen}
					toggleOpen={toggleOpen}
					signUpData={signUpData}
				/>
			)}
			<ControlForm onSubmit={handleSubmit(onSubmit)}>
				<ControlForm.ImgInput
					setProfileImageData={(file) => setValue("profileImage", file)}
					{...register("profileImage")}
				/>
				<div className={styles.checkWrap}>
					<div className={styles.checkFlex}>
						<ControlForm.Input
							title="이메일"
							placeholder="이메일을 입력해주세요."
							{...register("username")}
							className={errors.username ? styles.error : ""}
						/>

						<ControlForm.Button
							onClick={handleCheckUserName}
							text="중복확인"
							type="button"
							variant="dark"
						/>
					</div>
					<ErrorMessage
						errors={errors}
						name="username"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>
				<div>
					<ControlForm.Input
						title="비밀번호"
						placeholder="비밀번호를 입력해주세요."
						type="password"
						{...register("password")}
						className={errors.username ? styles.error : ""}
					/>
					<ErrorMessage
						errors={errors}
						name="password"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>
				<div>
					<ControlForm.Input
						title="비밀번호 확인"
						placeholder="비밀번호를 입력해주세요."
						type="password"
						{...register("confirmPassword")}
						className={errors.username ? styles.error : ""}
					/>
					<ErrorMessage
						errors={errors}
						name="confirmPassword"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>
				<div className={styles.checkWrap}>
					<div className={styles.checkFlex}>
						<ControlForm.Input
							title="닉네임"
							placeholder="닉네임을 입력해주세요."
							{...register("nickname")}
							className={errors.username ? styles.error : ""}
						/>
						<ControlForm.Button
							onClick={handleCheckNickName}
							text=" 중복확인"
							type="button"
							variant="dark"
							className={errors.username ? styles.error : ""}
						/>
					</div>

					<ErrorMessage
						errors={errors}
						name="nickname"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>
				<Container title="성별">
					<div className={`${styles.genderBox}`}>
						<ControlForm.RadioButton
							text="남성"
							value="MALE"
							{...register("gender")}
						/>
						<ControlForm.RadioButton
							text="여성"
							value="FEMALE"
							{...register("gender")}
						/>
						<ControlForm.RadioButton
							text="비공개"
							value="SECRET"
							{...register("gender")}
						/>
					</div>
					<ErrorMessage
						errors={errors}
						name="gender"
						render={({ message }) => <p>{message}</p>}
					/>
				</Container>
				<div>
					<ControlForm.Input
						title="만 나이"
						placeholder="나이를 입력해주세요."
						type="number"
						{...register("age")}
						className={errors.username ? styles.error : ""}
					/>
					<ErrorMessage
						errors={errors}
						name="age"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>
				<div>
					<ControlForm.TagBoard
						title="건강 고민"
						tags={tags}
						selectedTags={selectedTags}
						onTagClick={(selectedTag) =>
							setValue("userHashtagList", selectedTag)
						}
						{...register("userHashtagList")}
					/>
					<ErrorMessage
						errors={errors}
						name="userHashtagList"
						render={({ message }) => <p>{message}</p>}
					/>
				</div>

				<ControlForm.Button
					text="이메일 인증 후 회원가입"
					type="submit"
					variant="dark"
					className={styles.buttonStyle}
				/>
				{/* <DevTool control={control} /> */}
			</ControlForm>
		</>
	);
}
