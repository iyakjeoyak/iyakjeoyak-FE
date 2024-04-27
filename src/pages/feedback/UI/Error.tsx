import { FallbackProps } from "react-error-boundary";
import styles from "../styles/error.module.scss";
import { Button } from "@/components/Button";

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.message}>{error.message}</div>
			<Button onClick={() => resetErrorBoundary()} variant="dark" size="m">
				메인으로 돌아가기
			</Button>
			<section className={styles.textBox}>
				<strong>잠시</strong> 기다려주세요
			</section>
		</div>
	);
};

export default Error;
