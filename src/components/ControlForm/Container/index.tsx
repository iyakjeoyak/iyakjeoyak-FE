import styles from "./index.module.scss";
import { forwardRef } from "react";

interface ContainerProps {
	title?: string;
	children: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ title, children, ...props }: ContainerProps, ref) => {
		return (
			<label className={styles.container} {...props}>
				<div>{title}</div>
				<div className={styles.errorWrap} ref={ref}>
					{children}
				</div>
			</label>
		);
	},
);

export default Container;
