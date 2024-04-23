import styles from "./index.module.scss";

interface ContainerProps {
	title?: string;
	children: React.ReactNode;
}

export default function Container({ title, children }: ContainerProps) {
	return (
		<label className={styles.container}>
			<div>{title}</div>
			<div>{children}</div>
		</label>
	);
}
