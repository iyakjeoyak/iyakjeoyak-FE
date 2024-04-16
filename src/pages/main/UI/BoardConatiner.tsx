import styles from "../styles/BoardContainer.module.scss";

interface BoardContainerProps {
	title: string;
	children: React.ReactNode;
}

export default function BoardContainer({
	title,
	children,
}: BoardContainerProps) {
	return (
		<article className={styles.container}>
			<div className={styles["title"]}>{title}</div>
			<div className={styles["item-container"]}>{children}</div>
		</article>
	);
}
