import { HTMLMotionProps, motion } from "framer-motion";
import styles from "../styles/Content.module.scss";
import { useModal } from "../hooks/useModal";
import stopEvent from "@/utils/stopEvent";

interface ContentProps extends HTMLMotionProps<"div"> {
	children: React.ReactNode;
	className?: string;
}

// const loadFeatures = () =>
// 	import("../utils/features.ts").then(res => res.default)

export default function Content({
	children,
	className,
	...props
}: ContentProps) {
	const { isModalOpen, toggleModalOpen } = useModal();
	if (!isModalOpen) return null;

	return (
		// <LazyMotion features={loadFeatures}>
		<div className="background" onClick={toggleModalOpen}>
			<motion.div
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
			</motion.div>
		</div>
		// </LazyMotion>
	);
}
