import { Form } from "@/components/Form";
import LogoIcon from "@/assets/icons/LogoIcon";
import styles from "../onboarding/index.module.scss";
import { useNavigate } from "react-router-dom";

function OnBoarding() {
	const navigate = useNavigate();

	return (
		<section className={styles.container}>
		 <LogoIcon width="100%" height="100%" fill="black"/> 
			<Form.Button
				text="약 조회하러가기"
				onClick={() => navigate("/home")}
				type="button"
				variant="dark"
			/>
		</section>
	);
}

export default OnBoarding;
