import styles from "../styles/BoardContainer.module.scss";

interface BoardContainerProps {
	title: string;
	children: React.ReactNode;
	onClick?: () => void;
}

export default function BoardContainer({
	title,
	children,
	onClick,
}: BoardContainerProps) {
	return (
		<article className={styles.container}>
			<div className={styles["title-container"]}>
				<div className={styles["title"]}>{title}</div>
				{onClick && (
					<button onClick={onClick} className={styles["more"]}>
						더 보기
					</button>
				)}
			</div>
			{children}
		</article>
	);
}
