import { Link, useNavigate } from "react-router-dom";
import { Form } from "@/components/Form";
import { useFormContext } from "react-hook-form";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { ErrorMessage } from "@hookform/error-message";
import { loginDefault, useLoginValidation } from "./loginValidation";
import styles from "../styles/LoginForm.module.scss";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
export interface LoginType {
	username: string; // 아이디
	password: string;
}

export default function LoginForm() {
	return (
		// 로그인 유효성 검사
		<Form
			validationSchema={useLoginValidation()}
			pageDefaultValues={loginDefault}
		>
			<LoginInput />
		</Form>
	);
}

function LoginInput() {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useFormContext<LoginType>();
	const navigate = useNavigate();

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
						// authorization: `Bearer ${data.accessToken}`,
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
		<>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<Form.Input<LoginType>
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
						<Form.Input<LoginType>
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
				</form>
			</div>
			<div className={styles.wrap}>
				<div className={styles.textWrap}>
					<div className={`m-big`}>SNS 계정으로 로그인</div>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.container}>
						<div className={styles.google}>
							<Form.Button icon={FcGoogle} type="submit" variant="icon" />
						</div>
						<div className={styles.kakao}>
							<Form.Button
								icon={RiKakaoTalkFill}
								type="submit"
								variant="icon"
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
				</form>
			</div>
			<DevTool control={control} />
		</>
	);
}
