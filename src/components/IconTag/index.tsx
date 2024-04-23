import styles from "./index.module.scss";

interface IconTagProps {
	icon: React.ReactNode;
	text: string;
	onClick: () => void;
}
export default function IconTag({ icon, text, onClick }: IconTagProps) {
	return (
		<div onClick={onClick} className={styles.container}>
			{icon}
			<button>{text}</button>
		</div>
	);
}
