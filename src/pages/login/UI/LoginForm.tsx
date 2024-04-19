import { Link } from "react-router-dom";
import { Form } from "@/components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";
import styles from "../styles/LoginBtnForm.module.scss";

export interface LoginData {
	username: string;
	password: string;
}

export default function LoginForm() {
	const schema = yup.object().shape({
		username: yup
			.string()
			.min(6, "아이디는 6자리 이상이어야합니다.")
			.required("아이디를 입력하세요."),
		password: yup
			.string()
			.min(8, "비밀번호는 8자리 이상이어야 합니다.")
			.required("비밀번호를 입력하세요."),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<LoginData>({
		resolver: yupResolver(schema),
	});

	// console.log(watch("username"));

	const onSubmit: SubmitHandler<LoginData> = async (formData) => {
		// console.log(formData);
	};
	const handleClick = async () => {
		// console.log("button formData:", watch());
	};
	// const onInvalid = (data) => console.log(data, "onInvalid");
	return (
		<>
			<div>
				<Form schema={schema} onSubmit={() => handleSubmit(onSubmit)}>
					<Form.Input
						text="아이디"
						type="text"
						placeholder="아이디를 입력해주세요."
						{...register("username", { required: true })}
					/>
					{errors.username && (
						<p className="error">{errors.username.message}</p>
					)}
					<Form.Input
						text="비밀번호"
						type="password"
						placeholder="비밀번호를 입력해주세요."
						{...register("password", { required: true })}
					/>
					{errors.password && (
						<p className="error">{errors.password.message}</p>
					)}
				</Form>
			</div>
			<div className={styles.wrap}>
				<div className={styles.textWrap}>
					<div className={`m-big`}>SNS 계정으로 로그인</div>
				</div>

				<Form onSubmit={() => {}}>
					<div className={styles.container}>
						<div className={styles.google}>
							<Form.Button icon={FcGoogle} variant="icon" />
						</div>
						<div className={styles.kakao}>
							<Form.Button icon={RiKakaoTalkFill} variant="icon" />
						</div>
					</div>
					<div className={styles.registerWrap}>
						<span className="m-medium">회원이 아니신가요?</span>
						<Link className={`${styles.register} m-medium`} to={"/register"}>
							회원가입하러 가기
						</Link>
					</div>
					<Form.Button
						name="로그인"
						type="submit"
						onClick={handleClick}
						variant="dark"
					/>
				</Form>
			</div>
		</>
	);
}
