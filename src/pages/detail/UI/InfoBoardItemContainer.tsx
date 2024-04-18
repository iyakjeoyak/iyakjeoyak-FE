import styles from "../styles/InfoBoardItemContainer.module.scss";

interface InfoBoardItemContainerProps {
	title: string;
	children: React.ReactNode;
	isMoreBtn?: boolean;
}

export default function InfoBoardItemContainer({
	title,
	children,
	isMoreBtn = false,
}: InfoBoardItemContainerProps) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{title}</div>
			<div className={styles["content-container"]}>
				<p className={styles.description}>{children}</p>
				{isMoreBtn && <button>more</button>}
			</div>
		</div>
	);
}
