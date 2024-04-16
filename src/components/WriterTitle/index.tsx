import styles from "./index.module.scss";

export default function WriterTitle() {
	return (
		<div className={styles.container}>
			<img />
			<div className={styles["content-container"]}>
				<div className={styles.star}>
					별별별별별<span>4</span>
				</div>
				<div className={styles.writer}>
					작성자<span>2024.04.17</span>
				</div>
			</div>
		</div>
	);
}
