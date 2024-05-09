import styles from "@/components/Form/Container/index.module.scss";

interface ContainerProps {
	title?: string;
	children: React.ReactNode;
}

export default function Container({ title, children }: ContainerProps) {
	return (
		<label className={styles.container}>
			<div>{title}</div>
			<div className={styles.errorWrap}>{children}</div>
		</label>
	);
}
