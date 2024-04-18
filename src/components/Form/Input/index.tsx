import styles from "./index.module.scss";

interface InputProps {
	// name: string;
	text: string;
	type?: string;
	placeholder?: string;
	className?: string;
}

export const Input: React.FC<InputProps> = ({
	// name,
	text,
	type = "text",
	placeholder,
	className,
}) => {
	return (
		<div>
			<label className={styles.container}>
				<span className={className}>{text}</span>
				<input
					className={`${styles.element} ${className || ""} m-big`}
					type={type}
					placeholder={placeholder}
				/>
			</label>
		</div>
	);
};
