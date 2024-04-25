import { Link, useNavigate } from "react-router-dom";
import { Form } from "@/components/Form";

import { FcGoogle } from "react-icons/fc";
import { LoginType, loginDefault, useLoginValidation } from "./loginValidation";
import styles from "../styles/LoginForm.module.scss";
import axios from "axios";
import { SocialKakao } from "./SocialKakao";

export default function LoginForm() {
	const navigate = useNavigate();
	const handleGoogleLogin = async () => {
		console.log("Google login clicked");
	};

	const onSubmit = async (data: LoginType) => {
		console.log("data", data);
		try {
			const response = await axios.post(
				"http://54.180.121.206:8080/user/login",
				{
					username: data.username,
					password: data.password,
				},
				{
					headers: {
						"Content-Type": "application/json",
						authorization: `Bearer ${data}`,
					},
				},
			);
			console.log(response);
			const accessToken = response.data;
			console.log("accessToken", accessToken);
			alert("로그인에 성공했습니다.");
			navigate("/home");
			if (accessToken) {
				localStorage.setItem("accessToken", accessToken);
			}
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	return (
		<Form
			validationSchema={useLoginValidation()}
			pageDefaultValues={loginDefault}
			onSubmit={onSubmit}
		>
			<Form.Input<LoginType>
				name="username"
				title="아이디"
				placeholder="아이디를 입력해주세요."
			/>

			<Form.Input<LoginType>
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
						<SocialKakao />
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
