import XIcon from "@/assets/icons/XIcon";
import styles from "./index.module.scss";

interface BlackBoxProps {
	text: string;
}

export default function BlankBox({ text }: BlackBoxProps) {
	return (
		<div className={styles.container}>
			<div className={styles.icons}>
				<XIcon width={50} height={32} />
				<XIcon width={50} height={32} />
				<XIcon width={50} height={32} />
			</div>
			<div className={styles.text}>
				<div>{text}</div>
			</div>
		</div>
	);
}
