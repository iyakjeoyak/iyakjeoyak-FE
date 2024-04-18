import styles from "@/pages/fame/styles/FameTop.module.scss";
export function FameTop() {
	return (
		<ul className={styles.contaier}>
			<li>
				<div className={`${styles.circle} ${styles.gold} `}></div>
			</li>

			<li>
				<div className={`${styles.circle} ${styles.silver} `}></div>
				<div className={`${styles.circle} ${styles.bronze} `}></div>
			</li>
		</ul>
	);
}
