import * as yup from "yup";

import { useForm, useWatch } from "react-hook-form";

import { ControlForm } from "@/components/ControlForm";
import { ErrorMessage } from "@hookform/error-message";
import Modal from "@/components/Modal";
import { SignUpFormType } from "../utils/signupValidation";
import Timer from "../utils/Timer";
import postMailVerify from "@/api/user/postMailVerify";
import postSignUp from "@/api/user/postSignUp";
import styles from "../styles/SignUp.module.scss";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

export default function MailVerifyModal({
	isOpen,
	onClose,
	onOpen,
	toggleOpen,
	signUpData,
}: {
	isOpen: boolean;
	onClose: () => void;
	onOpen: () => void;
	toggleOpen: () => void;
	signUpData: SignUpFormType;
}) {
	const [isVerified, setIsVerified] = useState(false);
	const [timerCount, setTimerCount] = useState(180);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		mode: "onSubmit",
		resolver: yupResolver(
			yup.object().shape({
				verify: yup.string().required("인증번호를 입력하세요."),
			}),
		),
	});
	const authCode = useWatch({ control, name: "verify" });
	// 이메일 인증확인
	const { mutate: mailVerify } = useMutation({
		mutationFn: postMailVerify,
		onSuccess: (data) => {
			if (data) {
				toast.success("인증번호가 일치합니다.", { autoClose: 2000 });
				setIsVerified(true);
			} else {
				toast.error("인증번호를 확인해주세요.", { autoClose: 2000 });
				setIsVerified(false);
			}
		},
		onError: () => {
			toast.error("인증번호 확인 중 오류가 발생했습니다.", { autoClose: 2000 });
			setIsVerified(false);
		},
	});

	// 회원가입
	const { mutate: signUp } = useMutation({
		mutationFn: postSignUp,
		onSuccess: () => {
			toast.success("회원가입이 완료되었습니다.", { autoClose: 2000 });
			onClose();
			navigate("/login");
		},
		onError: () => {
			toast.error("회원가입에 실패하였습니다.", { autoClose: 2000 });
		},
	});

	const onSubmit = () => {
		if (isVerified === true) {
			const { profileImage, ...jsonData } = signUpData;

			const formData = new FormData();
			const userJoinPayload = {
				...jsonData,
				userRoleList: [1], // 백엔드에서 추가 요구하신 필드 값
			};
			// 회원가입 데이터
			formData.append(
				"userJoinPayload",
				new Blob([JSON.stringify(userJoinPayload)], {
					type: "application/json",
				}),
			);
			formData.append("imgFile", profileImage || "");

			signUp(formData);
		} else {
			toast.error("인증번호를 확인해주세요.", { autoClose: 2000 });
		}
	};

	const handleVerify = () => {
		const { username } = signUpData;
		mailVerify({ username, authCode });
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			toggleOpen={toggleOpen}
			onOpen={onOpen}
		>
			<Modal.Overlay>
				<Modal.Content>
					<ControlForm onSubmit={handleSubmit(onSubmit)}>
						<ControlForm.Input
							title="이메일"
							placeholder="이메일을 입력해주세요."
							value={signUpData.username}
							readOnly
						/>
						<div className={styles.checkWrap}>
							<Timer
								count={timerCount}
								setCount={setTimerCount}
								className={styles.count}
							/>
							<div className={styles.checkFlex}>
								<ControlForm.Input
									title="이메일 인증번호"
									placeholder="인증번호를 입력해주세요."
									{...register("verify")}
									className={errors.verify ? styles.error : ""}
								/>
								<ControlForm.Button
									onClick={handleVerify}
									text="인증번호 확인"
									type="button"
									variant="dark"
								/>
							</div>
							<ErrorMessage
								errors={errors}
								name="verify"
								render={({ message }) => <p>{message}</p>}
							/>
						</div>
						<ControlForm.Button
							text="가입하기"
							type="submit"
							variant="dark"
							className={styles.buttonStyle}
						/>
					</ControlForm>
				</Modal.Content>
			</Modal.Overlay>
		</Modal>
	);
}
