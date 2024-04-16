import { FcGoogle } from "react-icons/fc";
import { Form } from "@/components/form";
import { Link } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";
import styles from "../styles/LoginBtnForm.module.scss";

export default function LoginBtnForm() {
	const handleClick = async () => {};
	return (
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
					<Link className={`${styles.register} m-medium`} to={"./register"}>
						회원가입하러 가기
					</Link>
				</div>
				<Form.Button
					name="로그인"
					type="submit"
					onClick={handleClick}
					variant="dark"
				></Form.Button>
			</Form>
		</div>
	);
}
