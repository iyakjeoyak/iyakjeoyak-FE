import splitText from "../../utils/splitText";
import styles from "../../styles/InfoBoardItemContainer.module.scss";

interface InfoBoardItemContainerProps {
	title: string;
	text: string;
	hasMoreBtn?: boolean;
}

export default function InfoBoardItemContainer({
	title,
	text,
	hasMoreBtn = false,
}: InfoBoardItemContainerProps) {
	const textArray = splitText(text);

	return (
		<div className={styles.container}>
			<div className={styles.title}>{title}</div>
			<div className={styles["content-container"]}>
				<div className={styles.description}>
					{textArray.map((text, index) => (
						<div key={`${text}${index}`}>{text}</div>
					))}
				</div>
				{hasMoreBtn && <button>more</button>}
			</div>
		</div>
	);
}
