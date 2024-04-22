import styles from "../styles/OnBoardingForm.module.scss";
function OnBoardingForm() {
	return (
		<div className={styles.container}>
			<img src="/images/onboarding.png" alt="logo" />
			<div className="m-large">
				영양제를 조회하고, 영양제를 모아봐요!
				<br />
				오늘의 베스트 영양제
			</div>
		</div>
	);
}

export default OnBoardingForm;
