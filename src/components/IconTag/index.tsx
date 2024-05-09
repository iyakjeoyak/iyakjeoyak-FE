import styles from "./index.module.scss";

interface IconTagProps {
	icon: React.ReactNode;
	text: string;
	onClick: () => void;
	className?: string;
}

export default function IconTag({
	icon,
	text,
	onClick,
	className,
}: IconTagProps) {
	return (
		<div onClick={onClick} className={`${styles.container} ${className}`}>
			{icon}
			<button>{text}</button>
		</div>
	);
}
