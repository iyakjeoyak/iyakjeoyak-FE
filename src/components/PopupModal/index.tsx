import styles from "./index.module.scss";

interface PopupModalProps {
	icon?: React.ReactNode;
	text: string;
	onCancel?: () => void;
	onClick: () => void;
	onClose: () => void;
}

const PopupModal = ({
	icon,
	text,
	onCancel,
	onClick,
	onClose,
}: PopupModalProps) => {
	return (
		<div className="background" onClick={onClose}>
			<div className={styles.container}>
				<div className={styles["content-container"]}>
					{icon}
					<div className={styles.text}>{text}</div>
				</div>
				<div className={styles["button-container"]}>
					{onCancel && (
						<button className={styles.cancel} onClick={onCancel}>
							닫기
						</button>
					)}
					<button className={styles.confirm} onClick={onClick}>
						확인
					</button>
				</div>
			</div>
		</div>
	);
};

export default PopupModal;
