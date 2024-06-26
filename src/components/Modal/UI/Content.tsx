import { HTMLMotionProps, LazyMotion, domAnimation, m } from "framer-motion";

import stopEvent from "@/utils/stopEvent";
import styles from "../styles/Content.module.scss";
import { useModal } from "../hooks/useModal";

interface ContentProps extends HTMLMotionProps<"div"> {
	children: React.ReactNode;
	className?: string;
}

export default function Content({
	children,
	className,
	...props
}: ContentProps) {
	const { isOpen } = useModal();
	if (!isOpen) return null;

	return (
		<LazyMotion features={domAnimation}>
			<m.div
				{...props}
				className={`${styles.container} ${className}`}
				initial={{ opacity: 0, y: "100%" }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: "100%" }}
				transition={{ duration: 0.3 }}
				onClick={stopEvent("propagation")}
			>
				<div className={styles.element} />
				{children}
			</m.div>
		</LazyMotion>
	);
}
