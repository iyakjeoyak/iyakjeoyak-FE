import { Form } from "@/components/Form";
import OnBoardingForm from "./UI/OnBoardingForm";
import styles from "../onboarding/index.module.scss";
import { useNavigate } from "react-router-dom";

function OnBoarding() {
	const navigate = useNavigate();

	return (
		<section className={styles.container}>
			<OnBoardingForm />
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
