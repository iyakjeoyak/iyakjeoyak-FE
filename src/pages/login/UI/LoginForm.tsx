import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { postLogin } from "@/api/post";
import { Form } from "@/components/Form";
import { FcGoogle } from "react-icons/fc";
import {
	LoginFormType,
	loginDefault,
	loginValidation,
} from "../utils/loginValidation";
import { handleKakaoLogin } from "../utils/getKakaoAuthUrl";
import { handleGoogleLogin } from "../utils/getGoogleAuthUrl";
import { RiKakaoTalkFill } from "react-icons/ri";
import styles from "../styles/LoginForm.module.scss";

export default function LoginForm() {
	const navigate = useNavigate();
	const { mutate } = useMutation({
		mutationFn: postLogin,
	});

	const onSubmit = (data: LoginFormType) => {
		mutate(data, {
			onSuccess: (data) => {
				const accessToken = data.data;
				localStorage.setItem("accessToken", accessToken);

				alert("로그인이 완료되었습니다.");
				navigate("/login");
			},
		});
	};

	return (
		<Form
			validationSchema={loginValidation}
			pageDefaultValues={loginDefault}
			onSubmit={onSubmit}
		>
			<Form.Input<LoginFormType>
				name="username"
				title="아이디"
				placeholder="아이디를 입력해주세요."
			/>

			<Form.Input<LoginFormType>
				name="password"
				title="비밀번호"
				placeholder="비밀번호를 입력해주세요."
				type="password"
			/>

			<div className={styles.wrap}>
				<div className={styles.textWrap}>
					<div className={`m-big`}>SNS 계정으로 로그인</div>
				</div>

				<div className={styles.container}>
					<div className={styles.google}>
						<Form.Button
							icon={FcGoogle}
							type="button"
							variant="icon"
							onClick={handleGoogleLogin}
						/>
					</div>
					<div className={styles.kakao}>
						<Form.Button
							icon={RiKakaoTalkFill}
							type="button"
							variant="icon"
							onClick={handleKakaoLogin}
						/>
					</div>
				</div>
				<div className={styles.registerWrap}>
					<span className="m-medium">회원이 아니신가요?</span>
					<Link className={`${styles.register} m-medium`} to={"/register"}>
						회원가입하러 가기
					</Link>
				</div>
				<Form.Button text="로그인" type="submit" variant="dark" />
			</div>
		</Form>
	);
}
