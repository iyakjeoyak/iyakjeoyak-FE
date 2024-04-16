import styles from "./index.module.scss";

export default function TabBar() {
	return (
		<div className={styles.container}>
			<div className={`${styles.item} ${styles.active}`}>전체</div>
			<div className={styles.item}>기능별</div>
			<div className={styles.item}>성분별</div>
		</div>
	);
}
