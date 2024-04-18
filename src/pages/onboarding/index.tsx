import { Form } from "@/components/Form";
import OnBoardingForm from "./UI/OnBoardingForm";
import styles from "../onboarding/index.module.scss";
import { useNavigate } from "react-router-dom";

function OnBoarding() {
	const navigate = useNavigate();
	return (
		<section className={styles.container}>
			<OnBoardingForm />
			<Form
				onSubmit={() => {
					navigate("/home");
				}}
			>
				<Form.Button name="약 조회하러가기" variant="dark" />
			</Form>
		</section>
	);
}

export default OnBoarding;
