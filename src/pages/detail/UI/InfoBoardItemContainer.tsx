import styles from "../styles/InfoBoardItemContainer.module.scss";

function splitText(text: string) {
	const splitText = text.split("\n").filter((item) => item !== "");
	return splitText;
}

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
				<p className={styles.description}>
					{textArray.map((text) => (
						<p key={text}>{text}</p>
					))}
				</p>
				{hasMoreBtn && <button>more</button>}
			</div>
		</div>
	);
}
